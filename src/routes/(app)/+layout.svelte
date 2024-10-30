<script lang="ts">
	let { children } = $props();
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl normal-case" href="/">Advent of School</a>
	</div>
	<div class="flex-none">
		<!-- <ul class="menu menu-horizontal p-0">
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul> -->
	</div>
</nav>
<main class="p-4">
	{@render children()}
</main>
