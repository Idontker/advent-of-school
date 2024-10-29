<script lang="ts">
	import '../app.css';
	export const trailingSlash = 'always';
	export const prerender = true;

	let { children } = $props();
</script>

{@render children()}
