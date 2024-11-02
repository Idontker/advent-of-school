// import { public_test_cases, getPersonalTestcase } from '$lib/engine/days/day1/day1.server';
import { days } from '$lib/engine/days/index.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const sessionid = cookies.get('sessionid');

	const daySlug = 2;
	const day = days(daySlug);
	console.log(day.solution.toString());

	const public_tests = day.publicTestCases();
	const private_tests = day.getPersonalTestcase(locals.rng);

	return {
		daySlug: daySlug,
		sessionid: sessionid,
		public_test_cases: public_tests,
		private_test_cases: [private_tests]
	};
};
