<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { IShortPerson } from 'src/global';

	export let people: IShortPerson[] = [];

	const dispatch = createEventDispatcher();

	function dispatchSelected(id) {
		dispatch('selected', { value: id });
	}
</script>

<table class="table mt-4">
	<thead>
		<tr>
			<th scope="col">Id</th>
			<th scope="col">Name</th>
			<th scope="col">Popularity</th>
		</tr>
	</thead>
	<tbody>
		{#each people as person}
			<tr>
				<th scope="row"><button class="btn btn-link" on:click={() => dispatchSelected(person.id)}>{person.id}</button></th>
				<td>{person.name}</td>
				<td>{person.popularity}</td>
			</tr>
		{/each}
	</tbody>
</table>
