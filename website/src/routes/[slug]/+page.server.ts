import { getExample } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const example = await getExample(slug);
	return { example };
};
