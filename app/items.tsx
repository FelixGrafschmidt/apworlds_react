export type Category = string;
/**
 * Schema for ManualAP items.json
 */
export type Items = Item[];

export interface Item {
	/**
	 * The unique name of the item. Do not use () or : in the name
	 */
	name: string;
	/**
	 * (Optional) Is this item needed to unlock locations? Defaults to false if not included.
	 */
	progression?: boolean;
	/**
	 * (Optional) Number of copy of this item in the pool.
	 */
	count?: number;
	/**
	 * (Optional) The category(ies) this item fit in
	 */
	category?: [Category, ...Category[]];
	/**
	 * (Optional) Is this item usefull to have? Used for items that are not progression but you still want the rando to really use.
	 */
	useful?: boolean;
	/**
	 * (Optional) Should this item not get included in progression balance swaps. For more info check the discord
	 */
	progression_skip_balancing?: boolean;
	/**
	 * (Optional) Is this item a trap? Something the player doesnt want to get.
	 */
	trap?: boolean;
	/**
	 * (Optional) Is this item required to be placed somewhere accessible from the start (Sphere 1)
	 */
	early?: boolean;
	/**
	 * (Optional) Is this item supposed to be only in your locations(true) or anywhere(false)
	 */
	local?: boolean;
	/**
	 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
	 */
	_comment?: string;
	[k: string]: unknown;
}

export default function Items({ data }: { data: Items }) {}
