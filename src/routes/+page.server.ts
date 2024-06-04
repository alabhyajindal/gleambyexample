import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface ModuleImportInterface {
	default: string;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/*/*.gleam', { eager: true, query: 'raw' })
);

function main() {
	const examplesData = [];

	for (const example of examples) {
		const lines = example.default.split('\n');

		const title = lines[0].slice(4).trim();
		const url = title.toLowerCase().replaceAll(' ', '-');

		examplesData.push({ title, url });
	}

	return { examplesData };
}

export const load = () => {
	const { examplesData } = main();

	return {
		examplesData
	};
};
