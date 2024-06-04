import type { PageServerLoad } from './$types';

interface ModuleImportInterface {
	default: string;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/*/*.gleam', { eager: true, query: 'raw' })
);

export const load: PageServerLoad = async () => {
	let examplesData = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const title = contents.split('\n')[0].slice(4).trim();
		const url = title.toLowerCase().replaceAll(' ', '-');

		examplesData.push({ title, url });
	}

	return { examplesData };
};
