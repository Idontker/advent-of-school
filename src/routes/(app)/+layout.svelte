<script lang="ts">
	import NavBar from '$lib/comp/NavBar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<NavBar></NavBar>
	<main class="flex w-full flex-grow">
		{@render children()}
	</main>
</div>
