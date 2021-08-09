<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let search = '';
	let disabled = false;

	function dispatchSearch() {
		dispatch('search', { value: search });
	}
	function dispatchClear() {
		search = '';
		dispatch('clear');
	}
</script>

<form on:submit|preventDefault={dispatchSearch}>
	<div class="row">
		<input class="col-10 form-input" bind:value={search} placeholder="search...." />
		<button
			type="reset"
			{disabled}
			class="btn btn-warning btn-rounded col-1 mx-3"
			on:click={dispatchClear}>Clear</button
		>
	</div>
</form>
