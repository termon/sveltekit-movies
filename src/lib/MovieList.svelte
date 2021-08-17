<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import type { IShortMovie } from 'src/global';
	
	export let movies:IShortMovie[] = [];

	const dispatch = createEventDispatcher();

	function dispatchSelected(id) {
		dispatch('selected', { value: id });
	}
</script>

<table class="table table-sm mt-4">
	<thead>
		<tr>
			<th scope="col">Id</th>
			<th scope="col">Title</th>
			<th scope="col">Released</th>
		</tr>
	</thead>
	<tbody>
		{#each movies as movie}
			<tr>
				<th scope="row"><button class="btn btn-link" on:click={() => dispatchSelected(movie.id)}>{movie.id}</button></th>
				<td>{movie.title}</td>
				<td>{movie.release_date}</td>
			</tr>
		{/each}
	</tbody>
</table>
