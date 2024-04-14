export type Category = string;
export type Require =
	| string
	| (
			| string
			| unknown[]
			| {
					[k: string]: unknown;
			  }
	  )[]
	| {
			/**
			 * alternate to previous property
			 */
			or?: string[];
			[k: string]: unknown;
	  };
export type PlaceItemCategory = string;
export type PlaceItem = string;
/**
 * Schema for ManualAP locations.json
 */
export type Locations = Location[];

export interface Location {
	/**
	 * The unique name of the location.
	 */
	name?: string;
	/**
	 * (Optional) The name of the Region this location is part of.
	 */
	region?: string;
	/**
	 * (Optional) An array of the Category(ies) this location is a part of.
	 */
	category?: Category[];
	/**
	 * (Optional) Either an array of items or a boolean logic string(check discord).
	 */
	requires?: string | Require[];
	/**
	 * (Optional) Specify the category of item that will be placed at this location. (Ignore Logic)
	 */
	place_item_category?: PlaceItemCategory[];
	/**
	 * (Optional) Specify the list of item that can be placed at this location (will only randomly choose 1).
	 */
	place_item?: PlaceItem[];
	/**
	 * (Optional) Specify the categories of items that will never be placed at this location.
	 */
	dont_place_item_category?: PlaceItemCategory[];
	/**
	 * (Optional) Specify the list of items that cannot be placed at this location.
	 */
	dont_place_item?: PlaceItem[];
	/**
	 * (Optional) Is this location the goal of this Manual Apworld
	 */
	victory?: boolean;
	/**
	 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
	 */
	_comment?: string;
	[k: string]: unknown;
}

export default function Locations({ data }: { data: Locations }) {}
