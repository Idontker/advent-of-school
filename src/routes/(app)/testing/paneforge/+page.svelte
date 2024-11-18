<script lang="ts">
	import { PaneGroup, Pane, PaneResizer, type PaneAPI } from 'paneforge';

	let paneOne: PaneAPI;
	let collapsed = false;
</script>

{#if collapsed}
	<button
		on:click={() => {
			paneOne.expand();
		}}
	>
		Expand Pane One
	</button>
{:else}
	<button
		on:click={() => {
			paneOne.collapse();
		}}
	>
		Collapse Pane One
	</button>
{/if}
<PaneGroup direction="horizontal">
	<Pane
		class="bg-green-400"
		defaultSize={50}
		collapsedSize={5}
		collapsible={true}
		minSize={15}
		bind:pane={paneOne}
		onCollapse={() => (collapsed = true)}
		onExpand={() => (collapsed = false)}
	/>
	<PaneResizer />
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane class="bg-blue-400" defaultSize={50} />
			<PaneResizer class="relative h-2 w-full bg-gray-50">
				<div
					class="absolute left-1/2 top-1/2 z-10 flex h-5 w-7 -translate-x-1/2 -translate-y-1/2 rounded-sm border bg-red-600"
				>
					<!-- <DotsSixVertical class="size-4 text-black" weight="bold" /> -->
				</div>
			</PaneResizer>
			<Pane class="bg-orange-400" defaultSize={50}>Test test test</Pane>
		</PaneGroup>
	</Pane>
</PaneGroup>
