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
	function customSearch(e) {
		search = e.target.value;
		dispatchSearch();
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

	<div class="row mt-2">
		<div class="col-2">
			<input type="radio" name="customSearch" value=":popular" on:click={customSearch} />
			<label for="customSearch">Popular</label>
		</div>
		<div class="col-2">
			<input type="radio" name="customSearch" value=":top" on:click={customSearch} />
			<label for="customSearch">Top Rated</label>
		</div>
		<div class="col-2">
			<input type="radio" name="customSearch" value=":trending" on:click={customSearch} />
			<label for="customSearch">Trending</label>
		</div>
		<div class="col-2">
			<input type="radio" name="customSearch" value=":playing" on:click={customSearch} />
			<label for="customSearch">Now Playing</label>
		</div>
		<div class="col-2">
			<input type="radio" name="customSearch" value=":upcoming" on:click={customSearch} />
			<label for="customSearch">Upcoming</label>
		</div>
	</div>
</form>
