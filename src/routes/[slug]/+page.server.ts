import type { PageServerLoad } from './$types';
import { codeToHtml } from 'shiki';

interface ModuleImportInterface {
	default: string;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/src/*.gleam', { eager: true, query: 'raw' })
);

const getInfoFromContents = (contents: string) => {
	const lines = contents.split('\n');

	const title = lines[0].slice(4).trim();
	const desc = lines[1].slice(4).trim();
	const code = lines
		.slice(3)
		.filter((line) => {
			return line.slice(0, 2) !== '//';
		})
		.join('\n');

	const url = title.toLowerCase().replaceAll(' ', '-');
	const output = lines
		.filter((line) => {
			if (line.slice(0, 3) == '// ') {
				return true;
			}
		})
		.map((line) => line.slice(2).trim())
		.join('\n');

	return { title, desc, url, code, output };
};

const createData = async () => {
	let examplesData = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const { title, desc, code, url, output } = getInfoFromContents(contents);

		const htmlCode = await codeToHtml(code, {
			lang: 'gleam',
			themes: {
				light: 'one-light',
				dark: 'one-dark-pro'
			}
		});

		const htmlOutput = await codeToHtml(output, {
			lang: 'shell',
			themes: {
				light: 'one-light',
				dark: 'one-dark-pro'
			}
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
