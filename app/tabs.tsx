"use client";

import { useState } from "react";
import Tab from "./tab";
import Categories from "./categories";
import Game from "./game";
import Items from "./items";
import Locations from "./locations";
import Regions from "./regions";

const components: Record<string, any> = {
	"categories.json": Categories,
	"game.json": Game,
	"items.json": Items,
	"locations.json": Locations,
	"regions.json": Regions,
};

export default function Tabs({ dir }: { dir: string[] }) {
	let [tab, setTab] = useState("");
	let [data, setData] = useState({});

	let tabContent;

	if (tab) {
		const Component = components[tab];

		tabContent = (
			<section className="border w-full rounded-b-xl p-8 overflow-y-auto max-h-[40rem] scrollbar scrollbar-thumb-gray-500 bg-gray-800">
				<Component data={data} />
			</section>
		);
	}

	async function switchTab(newtab: string) {
		try {
			const response = await fetch("/api/apworld/" + newtab);
			setData(await response.json());
			setTab(newtab);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section className="flex flex-row w-full justify-between border-gray-200 border rounded-t-xl text-xl divide-x-2 bg-gray-800">
				{dir.map((item, i) => (
					<Tab
						key={i}
						tab={item}
						active={item === tab}
						setTab={switchTab}
					/>
				))}
			</section>
			{tabContent}
		</>
	);
}
