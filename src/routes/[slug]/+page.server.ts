import type { PageServerLoad } from './$types';
import { codeToHtml } from 'shiki';

interface ModuleImportInterface {
	default: string;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/*/*.gleam', { eager: true, query: 'raw' })
);

const outputs: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/*/*.sh', { eager: true, query: 'raw' })
);

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const fileName = slug.replaceAll('-', '_');

	let exampleData;

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const title = contents.split('\n')[0].slice(4).trim();
		const desc = contents.split('\n')[1].slice(4).trim();

		const code = contents.split('\n').slice(3).join('\n');

		if (title.replaceAll(' ', '_').toLowerCase() == fileName) {
			const output = outputs[i].default;
			const htmlCode = await codeToHtml(code, {
				lang: 'gleam',
				theme: 'one-dark-pro'
			});

			const htmlOutput = await codeToHtml(output, {
				lang: 'shell',
				theme: 'one-dark-pro'
			});

			exampleData = { title, desc, htmlCode, htmlOutput };
		}
	}

	return { exampleData };
};
