<script context="module">
	export const load = async ({ page, fetch }) => {
		const id = page.params.id;
		const resp = await fetch(`/api/person/${id}.json`);
		if (resp.ok) {
			const json = await resp.json();
			return {
				props: {
					person: json
				}
			};
		}
	};
</script>

<script>
	import PersonDetails from '$lib/PersonDetails.svelte';

	export let person; // access prop from context
</script>

<PersonDetails {person} />
