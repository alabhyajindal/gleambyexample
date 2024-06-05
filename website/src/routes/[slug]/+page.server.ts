import { getInfoFromContents } from '$lib';
import type { PageServerLoad } from './$types';
import { codeToHtml } from 'shiki';

interface ModuleImportInterface {
	default: string;
}

interface SiblingData {
	title: string;
	url: string;
}

interface ExamplesData {
	url: string;
	title: string;
	desc: string;
	htmlCode: string;
	htmlOutput: string;
	orderNumber: number;
	next: SiblingData | null;
	prev: SiblingData | null;
}

const examples: ModuleImportInterface[] = Object.values(
	import.meta.glob('@examples/src/*.gleam', { eager: true, query: 'raw' })
);

const createData = async () => {
	let examplesData: ExamplesData[] = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const { title, desc, code, url, output, orderNumber } = getInfoFromContents(contents);

		const htmlCode = await codeToHtml(code, {
			lang: 'gleam',
			themes: {
				light: 'one-light',
				dark: 'one-dark-pro'
			}
		});

		const htmlOutput = await codeToHtml(output, {
			lang: 'shellsession',
			themes: {
				light: 'one-light',
				dark: 'one-dark-pro'
			}
		});

		examplesData.push({
			url,
			title,
			desc,
			htmlCode,
			htmlOutput,
			orderNumber,
			next: null,
			prev: null
		});
	}

	examplesData.sort((a, b) => a.orderNumber - b.orderNumber);

	for (const [i, data] of examplesData.entries()) {
		if (i + 1 < examplesData.length) {
			const nextExample = examplesData[i + 1];
			const { title, url } = nextExample;
			data.next = { title, url };
		}
		if (i - 1 >= 0) {
			const prevExample = examplesData[i - 1];
			let { title, url } = prevExample;
			data.prev = { title, url };
		}
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
