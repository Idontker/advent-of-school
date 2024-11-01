// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			rng: seedrandom.PRNG;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
