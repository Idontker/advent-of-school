<script lang="ts">
	let { data } = $props();
</script>

<data.component />

<h1>SessionCookie:{data.sessionid}!</h1>

{#each data.public_test_cases as test}
	<div>
		in: {test.inputs} - expected: {test.expected}
	</div>
{/each}

{#each data.private_test_cases as test}
	<div>
		in: {test.inputs} - expected: {test.expected}
	</div>
{/each}
