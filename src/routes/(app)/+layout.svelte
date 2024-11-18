<script lang="ts">
	import NavBar from '$lib/comp/NavBar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen w-full flex-col">
	<NavBar></NavBar>
	<main class="flex w-full flex-grow overflow-hidden">
		{@render children()}
	</main>
</div>
