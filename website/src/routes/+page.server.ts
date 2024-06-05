import { getInfoFromContents } from '$lib';
import type { PageServerLoad } from './$types';

interface ModuleImportInterface {
	default: string;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/src/*.gleam', { eager: true, query: 'raw' })
);

export const load: PageServerLoad = async () => {
	let examplesData = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const { title, url, orderNumber } = getInfoFromContents(contents);
		examplesData.push({ title, url, orderNumber });
	}

	examplesData.sort((a, b) => a.orderNumber - b.orderNumber);
	return { examplesData };
};
