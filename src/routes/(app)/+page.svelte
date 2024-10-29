<script lang="ts">
	let days = Array.from({ length: 24 }, (_, i) => i + 1);
	let enabled = [1];
</script>

<div class="grid grid-cols-6 gap-2">
	{#each days as day}
		<a href="/day/{day}" class="w-full">
			<button class="btn btn-primary w-full" disabled={enabled.indexOf(day) == -1}>{day}</button>
		</a>
	{/each}
</div>
