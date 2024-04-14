"use client";

export default function Tab({
	tab,
	setTab: switchTab,
	active,
}: {
	tab: string;
	setTab: Function;
	active: boolean;
}) {
	return (
		<div
			className={
				"w-1/5 flex flex-row justify-center py-4 cursor-pointer first:rounded-tl-xl last:rounded-tr-xl " +
				(active ? "font-bold bg-teal-600" : "")
			}
			onClick={() => {
				switchTab(tab);
			}}
		>
			{tab.split(".").slice(0, -1).join(".")}
		</div>
	);
}
