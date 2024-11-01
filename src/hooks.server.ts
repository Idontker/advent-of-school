import type { Handle } from '@sveltejs/kit';
import seedrandom from 'seedrandom';

export const handle: Handle = async ({ event, resolve }) => {
	let cookie = event.cookies.get('sessionid');

	if (!cookie) {
		cookie = crypto.randomUUID();
		event.cookies.set('sessionid', cookie, { path: '/' });
	}

	const seed = cookie.replace('-', '');
	event.locals.rng = seedrandom(seed);

	return await resolve(event);
};
