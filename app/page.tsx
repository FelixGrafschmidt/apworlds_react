import { promises as fs } from "fs";
import Tabs from "./tabs";

export default async function Home() {
	const base = process.env.APWORLD_PATH;
	let dir: string[] = [];

	if (base) {
		dir = await fs.readdir(base, { encoding: "utf-8" });
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-start px-24 p-8">
			<Tabs dir={dir} />
		</main>
	);
}
