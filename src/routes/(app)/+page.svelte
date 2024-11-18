<script lang="ts">
	let days = Array.from({ length: 24 }, (_, i) => i + 1);
	let enabled = [1];
</script>

<div class="flex w-full flex-col">
	<div class="grid w-full grid-cols-6 place-items-center gap-8 px-20">
		{#each days as day}
			<a href="/day/{day}" class="w-full {enabled.indexOf(day) == -1 ? 'pointer-events-none' : ''}">
				<button class="btn btn-primary h-full w-full" disabled={enabled.indexOf(day) == -1}
					>{day}</button
				>
			</a>
		{/each}
	</div>
</div>
