export type ConnectsTo = string;

/**
 * Schema for ManualAP categories.json
 */
export interface Categories {
	/**
	 * This interface was referenced by `MySchema`'s JSON-Schema definition
	 * via the `patternProperty` "^.*$".
	 */
	[k: string]: {
		/**
		 * (Optional) Should this category be Hidden in the client?
		 */
		hidden?: boolean;
		/**
		 * (Optional) Array of Options that will decide if the items & locations in this category are enabled
		 */
		yaml_option?: [ConnectsTo, ...ConnectsTo[]];
		/**
		 * (Optional) Does nothing, Its mainly here for Dev notes for future devs to understand your logic
		 */
		_comment?: string;
		[k: string]: unknown;
	};
}

export default function Categories({ data }: { data: Categories }) {
	return (
		<>
			<div className="mb-4">
				<button className="px-4 py-2 border-gray-200 border rounded">
					Generate categories
				</button>
			</div>
			{Object.entries(data).map(([key, value]) => (
				<div key={key}>{JSON.stringify(value)}</div>
			))}
		</>
	);
}
