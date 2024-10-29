<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';

	let { onclose }: any = $props();

	type ModalParams = { duration?: number };
	type Modal = (node: Element, params?: ModalParams) => TransitionConfig;

	const modal: Modal = (node, { duration = 300 } = {}) => {
		const transform = getComputedStyle(node).transform;

		return {
			duration,
			easing: quintOut,
			css: (t, u) => {
				return `transform:
            ${transform}
            scale(${t})
            translateY(${u * -100}%)
          `;
			}
		};
	};

	const dispatch = createEventDispatcher();

	// function closeModal() {
	// 	dispatch('close');
	// }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="mmodal-background" on:click={onclose}></div>

<div transition:modal={{ duration: 1000 }} class="mmodal" role="dialog" aria-modal="true">
	<img src="https://i.giphy.com/media/Ju7l5y9osyymQ/giphy.webp" alt="Man is dancing" />
</div>

<style>
	.mmodal-background {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: hsla(0 0% 0% / 20%);
		z-index: 10;
	}

	.mmodal {
		z-index: 20;
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		/* box-shadow: 0 0 10px hsl(0 0% 0% / 10%); */
		transform: translate(-50%, -50%);
		border-radius: 1rem;
	}
</style>
