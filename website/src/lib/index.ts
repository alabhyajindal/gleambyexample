import { codeToHtml } from 'shiki';

interface ModuleImportInterface {
	default: string;
}

interface SiblingData {
	title: string;
	slug: string;
}

interface ExamplesData {
	slug: string;
	fileName: string;
	title: string;
	desc: string;
	htmlCode: string;
	htmlOutput: string;
	orderNumber: number;
	next: SiblingData | null;
	prev: SiblingData | null;
}

export const getInfoFromContents = (contents: string) => {
	const lines = contents.split('\n');

	const title = lines[1].slice(4).trim();
	const desc = lines[2].slice(4).trim();
	const code = lines
		.slice(4)
		.filter((line) => {
			return line.slice(0, 2) !== '//';
		})
		.join('\n');

	const slug = title.toLowerCase().replaceAll(' ', '-');
	const fileName = title.toLowerCase().replaceAll(' ', '_');
	const orderNumber = Number(lines[0].slice(4).trim());
	const output = lines
		.filter((line) => {
			if (line.slice(0, 3) == '// ') {
				return true;
			}
		})
		.map((line) => line.slice(2).trim())
		.join('\n');

	return { title, desc, slug, code, output, orderNumber, fileName };
};

export const getExamples = async () => {
	const examples: ModuleImportInterface[] = Object.values(
		import.meta.glob('@examples/src/*.gleam', { eager: true, query: 'raw' })
	);

	let examplesData: ExamplesData[] = [];

	for (const [i, example] of examples.entries()) {
		const contents = example.default;
		const { title, desc, code, slug, output, orderNumber, fileName } =
			getInfoFromContents(contents);

		const htmlCode = await codeToHtml(code, {
			lang: 'gleam',
			themes: {
				light: 'solarized-light',
				dark: 'one-dark-pro'
			},
			defaultColor: false
		});

		const htmlOutput = await codeToHtml(output, {
			lang: 'shellsession',
			themes: {
				light: 'solarized-light',
				dark: 'one-dark-pro'
			},
			defaultColor: false
		});

		examplesData.push({
			slug,
			fileName,
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
			const { title, slug } = nextExample;
			data.next = { title, slug };
		}
		if (i - 1 >= 0) {
			const prevExample = examplesData[i - 1];
			let { title, slug } = prevExample;
			data.prev = { title, slug };
		}
	}
	return examplesData;
};

export const getExample = async (slug: string) => {
	let examples = await getExamples();
	let example = examples.find((example) => example.slug == slug);
	return example;
};

export function pluckData<T extends object>(arr: T[], keys: (keyof T)[]): Partial<T>[] {
	return arr.map((obj) => {
		const newObj: Partial<T> = {};
		keys.forEach((key) => {
			if (key in obj) {
				newObj[key] = obj[key];
			}
		});
		return newObj;
	});
}
