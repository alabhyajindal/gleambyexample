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

const getInfoFromContents = (contents: string) => {
	const title = contents.split('\n')[0].slice(4).trim();
	const desc = contents.split('\n')[1].slice(4).trim();
	const url = title.toLowerCase().replaceAll(' ', '-');
	const code = contents.split('\n').slice(3).join('\n');

	return { title, desc, url, code };
};

const createData = async () => {
	let examplesData = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const { title, desc, code, url } = getInfoFromContents(contents);

		const output = outputs[i].default;
		const htmlCode = await codeToHtml(code, {
			lang: 'gleam',
			theme: 'one-dark-pro'
		});

		const htmlOutput = await codeToHtml(output, {
			lang: 'shell',
			theme: 'one-dark-pro'
		});

		let next = null;
		if (i + 1 < examples.length) {
			const nextExample = examples[i + 1];
			const nextExampleContents = nextExample.default;
			let { title, url } = getInfoFromContents(nextExampleContents);
			next = { title, url };
		}

		let prev = null;
		if (i - 1 >= 0) {
			const prevExample = examples[i - 1];
			const prevExampleContents = prevExample.default;
			let { title, url } = getInfoFromContents(prevExampleContents);
			prev = { title, url };
		}

		examplesData.push({ url, title, desc, htmlCode, htmlOutput, next, prev });
	}
	return examplesData;
};

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const examplesData = await createData();
	if (examplesData) {
		const example = examplesData.find((example) => {
			if (example.url == slug) {
				return example;
			}
		});
		return { example };
	}
};
