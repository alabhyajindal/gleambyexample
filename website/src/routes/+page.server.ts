import { getExamples, pluckData } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	let examplesData = await getExamples();
	let examplesList = pluckData(examplesData, ['slug', 'title']);
	return { examplesList };
};
