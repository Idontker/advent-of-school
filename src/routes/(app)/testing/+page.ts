import type { PageLoad } from './$types';
export const load: PageLoad = async ({ data }) => {
	const module =
		data.daySlug == 1
			? await import('$lib/engine/days/day1/Day1.svelte')
			: await import('$lib/engine/days/day2/Day2.svelte');

	// return {
	// 	component: module.default,
	// 	message: 'TODO add a message'
	// };

	return {
		...data,
		component: module.default
	};
};
