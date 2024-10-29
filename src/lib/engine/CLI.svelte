<script lang="ts">
	import { onMount } from 'svelte';
	import { getRunStatement, testcases } from './day1';

	// ---------------------------------------
	// RICK WALL
	import Modal from '$lib/comp/Modal.svelte';

	let showModal = $state(false);

	const open = () => (showModal = true);
	const close = () => (showModal = false);
	// ---------------------------------------

	let output: { classes: string; msg: string }[] = $state([]);
	let test_results: boolean[] = $state([]);

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 's') {
			event.preventDefault();
			onclick();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
	interface Props {
		// TODO: provide a testcase
		// and and add the testcase to the

		// TODO: sanatize the execution
		// each testcase should define an entry method
		// an AST should remove anonymous and globals
		// and "start" the testcase:

		// e.g.  "zeahleRehntiere(15)"

		// the sandox shall return the console output
		// and it should return the result of the call
		useCode: () => string;
		current_testcase: number;
	}

	let { useCode, current_testcase = 0 }: Props = $props();
	console.assert(
		Number.isInteger(current_testcase) && current_testcase >= 0 && current_testcase < 3,
		'current_testcase index is not valid (should be an int and 0 <= _ < 3):' + current_testcase
	);

	onMount(() => {
		window.addEventListener('message', function (e: any) {
			// Sandboxed iframes which lack the 'allow-same-origin'
			// header have "null" rather than a valid origin. This means you still
			// have to be careful about accepting data via the messaging API you
			// create. Check that source, and validate those inputs!

			// TODO: actually parse the e

			var frame = document.getElementById('sandboxed') as HTMLIFrameElement | null;
			if (frame && e.origin === 'null' && e.source === frame.contentWindow) {
				console.log(e.data);
				console.log('Result: ' + e.data.result);
				console.log('Result: ' + e.data.error);

				let local_current_testcase = e.data.current_testcase;
				let { expected } = testcases[local_current_testcase];
				console.log('Expected: ' + expected);

				if (e.data.logs) {
					resolveLogs(e.data.logs);
				}

				if (e.data.error) {
					resolveError(e.data.error, local_current_testcase);
				} else {
					resolveResult(e.data.result, expected, local_current_testcase);
				}
			}
		});
	});

	interface Log {
		level: 'log' | 'debug' | 'error';
		msg: string;
	}
	function resolveLogs({ logs }: { logs: Log[] }) {
		if (!logs) {
			return;
		}
		for (let log of logs) {
			if (log.level === 'debug') {
				output.push({ classes: 'text-yellow-500', msg: log.msg });
			} else if (log.level === 'error') {
				output.push({ classes: 'text-red-500', msg: log.msg });
			} else {
				output.push({ classes: '', msg: log.msg });
			}
		}
	}

	function resolveError(error: any, current_testcase: number) {
		output.push({ classes: '', msg: '-------------------------------------------' });
		output.push({ classes: 'text-red-500', msg: error });
		output.push({ classes: 'text-red-500', msg: `Testcase ${current_testcase}: ❌ failed` });
		test_results.push(false);
	}
	function resolveResult(actual: any, expected: any, current_testcase: number) {
		output.push({ classes: '', msg: '-------------------------------------------' });
		if (actual === expected) {
			output.push({ classes: 'text-green-500', msg: `Testcase ${current_testcase}: ✔️ succeeded` });
			test_results.push(true);
		} else {
			output.push({ classes: 'text-red-500', msg: `Testcase ${current_testcase}: ❌ failed` });
			test_results.push(false);
		}
	}

	function startExec(local_current_testcase: number) {
		let code = useCode();

		let { inputs } = testcases[local_current_testcase];
		code += ';\n';
		code += getRunStatement(inputs[0]);
		console.info('tc: ' + local_current_testcase, code);

		var frame = document.getElementById('sandboxed') as HTMLIFrameElement | null;
		// Note that we're sending the message to "*", rather than some specific
		// origin. Sandboxed iframes which lack the 'allow-same-origin' header
		// don't have an origin which you can target: you'll have to send to any
		// origin, which might alow some esoteric attacks. Validate your output!
		if (frame && frame.contentWindow) {
			frame.contentWindow.postMessage(
				{ code: code, current_testcase: local_current_testcase },
				'*'
			);
		}
	}

	function onclick() {
		output = [{ classes: 'text-yellow-500', msg: 'Running code...' }];

		startExec(current_testcase);
	}

	function runAllTestCases() {
		output = [{ classes: 'text-yellow-500', msg: 'Running code...' }];

		for (let i = 0; i < testcases.length; i++) {
			startExec(i);
		}

		// wait for all tasks to finish
		const waitForResults = async () => {
			while (testcases.length !== test_results.length) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		};
		waitForResults().then(() => {
			let successCount = test_results.filter((result) => result).length;
			output.push({
				classes: 'text-green-500',
				msg: `Number of successful test cases: ${successCount} of ${testcases.length}`
			});
			if (testcases.length == successCount) {
				open();
			}
		});
	}
</script>

{#if showModal}
	<Modal
		on:close={() => {
			return close();
		}}
	>
		<img src="https://i.giphy.com/media/Ju7l5y9osyymQ/giphy.webp" alt="Man is dancing" />
	</Modal>
{/if}

<div
	id="output"
	class="box-border h-52 w-full overflow-y-auto bg-black p-2 font-mono text-secondary"
>
	{#if output.length > 0}
		{#each output as { classes, msg }}
			<div class={classes}>{msg}</div>
		{/each}
	{:else}
		<div>... this is your console ...</div>
		<div>run your program to see its output</div>
	{/if}
</div>

<button class="btn btn-primary" id="safe" {onclick}>Run Code</button>
<button class="btn btn-secondary" id="safe" onclick={runAllTestCases}>Run All Tests </button>
<iframe
	title="sandbox frame"
	sandbox="allow-scripts"
	id="sandboxed"
	src="/iframe/index.html"
	class="hidden"
></iframe>
