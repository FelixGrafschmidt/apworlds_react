/**
 * Schema for ManualAP game.json
 */
export type Game = {
	/**
	 * The name of your game, compatible with capital letters.
	 */
	game: string;
	/**
	 * Deprecated use 'creator' instead
	 */
	player?: string;
	/**
	 * Your Username.
	 */
	creator?: string;
	/**
	 * Name of the filler items that get placed when there's no more real items to place.
	 */
	filler_item_name: string;
	/**
	 * (Optional) Starting inventory
	 */
	starting_items?: Sitems[];
	/**
	 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
	 */
	_comment?: string;
	[k: string]: unknown;
} & {
	[k: string]: unknown;
};

export interface Sitems {
	/**
	 * (Optional) Causes the starting item block to only occur when any of the matching items have already been added to starting inventory by any previous starting item blocks
	 */
	if_previous_item?: string[];
	/**
	 * (Optional) List of item to pick from. If not included will pick from 'item_categories' if present or from the entire item pool if absent
	 */
	items?: string[];
	/**
	 * (Optional) List of category of items to pick from. If not included will pick from 'items' if present or from the entire item pool if absent
	 */
	item_categories?: string[];
	/**
	 * (Optional) how many items of this block will be randomly added to inventory. Will add every item in the block if not included
	 */
	random?: number;
	/**
	 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
	 */
	_comment?: string;
	[k: string]: unknown;
}

export default function Game({ data }: { data: Game }) {}
