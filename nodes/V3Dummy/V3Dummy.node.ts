import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class V3Dummy implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'V3 Dummy',
		name: 'v3Dummy',
		icon: { light: 'file:v3Dummy.svg', dark: 'file:v3Dummy.dark.svg' },
		group: ['transform'],
		version: [1],
		description: 'Dummy node used to test the n8n nodes API version guard',
		defaults: {
			name: 'V3 Dummy',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		subtitle: '={{ $parameter["returnTestData"] ? "Return test data" : "Passthrough" }}',
		properties: [
			{
				displayName: 'Return Test Data',
				name: 'returnTestData',
				type: 'boolean',
				default: true,
				description: 'Whether to add a "v3dummy" field to each returned item',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			if (this.getNodeParameter('returnTestData', itemIndex, true) as boolean) {
				items[itemIndex].json.v3dummy = true;
			}
		}

		return [items];
	}
}
