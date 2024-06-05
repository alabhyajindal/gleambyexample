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

	const url = title.toLowerCase().replaceAll(' ', '-');
	const orderNumber = Number(lines[0].slice(4).trim());
	const output = lines
		.filter((line) => {
			if (line.slice(0, 3) == '// ') {
				return true;
			}
		})
		.map((line) => line.slice(2).trim())
		.join('\n');

	return { title, desc, url, code, output, orderNumber };
};
