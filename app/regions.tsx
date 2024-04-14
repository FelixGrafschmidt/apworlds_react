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
export type ConnectsTo = string;

/**
 * Schema for ManualAP regions.json
 */
export interface Regions {
	/**
	 * This interface was referenced by `MySchema`'s JSON-Schema definition
	 * via the `patternProperty` "^.*$".
	 */
	[k: string]: {
		/**
		 * (Optional) Either an array of items or a boolean logic string(check discord).
		 */
		requires?: string | Require[];
		/**
		 * Array of other regions the player can go from this region.
		 */
		connects_to?: ConnectsTo[];
		/**
		 * (Optional) Is this region accessible from the start? Defaults to false if not included.
		 */
		starting?: boolean;
		/**
		 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
		 */
		_comment?: string;
		[k: string]: unknown;
	};
}

export default function Regions({ data }: { data: Regions }) {}
