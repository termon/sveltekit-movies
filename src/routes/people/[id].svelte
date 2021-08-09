<script context="module">
	export const load = async ({ page, fetch }) => {
		const id = page.params.id;
		const resp = await fetch(`/api/people/${id}.json`);
		const json = await resp.json();
		return {
			props: {
				person: json
			}
		};
	};
</script>

<script>
	import PersonDetails from '$lib/PersonDetails.svelte';

	export let person; // access prop from context
</script>

<PersonDetails {person} />
