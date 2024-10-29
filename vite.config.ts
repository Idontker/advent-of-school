import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.html'],

	server: {
		headers: {
			// 'Content-Security-Policy': "default-src 'self'; script-src 'self' data:; connect-src 'self' ;"
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
