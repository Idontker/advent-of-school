<script lang="ts">
	let iframe: HTMLIFrameElement;

	import sandbox from '../sandbox.html?raw';

	export function runCode(code: string) {
		try {
			console.log(iframe);
			if (iframe) {
				console.log('start');
				console.log(iframe.contentWindow);

				iframe.contentWindow!.postMessage(code, '*');
			}
		} catch (e) {
			console.error(e);
		}
	}

	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('message', (event) => {
			if (event.origin !== window.location.origin) {
				return;
			}
			console.log('Result from iframe:', event.data);
		});
	});
</script>

<iframe class="w-xl h-xl" title="sandox" bind:this={iframe} style="display:none;" src={sandbox}
></iframe>
