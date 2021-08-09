<script type="ts">
	import PersonSearch from '$lib/PersonSearch.svelte';
	import PersonDetails from '$lib/PersonDetails.svelte';
	import PersonList from '$lib/PersonList.svelte';

	import type { IPerson, IShortPerson } from 'src/global';

	let people: IShortPerson[] = [];
	let person: IPerson = undefined;
	let search = '';

	async function handleSearch(e) {
		search = e.detail.value;
		const resp = await fetch(`/api/people/${search}.json`);
		const json = await resp.json();
		console.log(search, json);
		people = json.results;
	}
	async function handleSelected(e) {
		const id = e.detail.value;
		const resp = await fetch(`/api/person/${id}.json`);
		// check if request returned a movie
		if (resp.ok) {
			const json = await resp.json();
			person = json;
		}
	}
	function handleClear() {
		search = '';
		people = [];
		person = undefined;
	}
</script>

<h3>People</h3>

<PersonSearch on:search={handleSearch} on:clear={handleClear} />

<PersonDetails {person} />

<PersonList on:selected={handleSelected} {people} />
