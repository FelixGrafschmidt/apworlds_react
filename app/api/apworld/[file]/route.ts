import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const AP_WORLD_FILES = [
	"categories.json",
	"game.json",
	"items.json",
	"locations.json",
	"regions.json",
];
const base = process.env.APWORLD_PATH;

export async function GET(
	_request: Request,
	context: { params: { file: string } }
) {
	const file = context.params.file;
	if (!base || !AP_WORLD_FILES.includes(file)) {
		return NextResponse.json(
			{ error: "Not found" },
			{
				status: 404,
			}
		);
	}
	const content = await fs.readFile(base + "/" + file, {
		encoding: "utf-8",
	});
	return NextResponse.json(JSON.parse(content));
}
