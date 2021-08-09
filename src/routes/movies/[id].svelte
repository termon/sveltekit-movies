<script context="module">
	export const load = async ({ page, fetch }) => {
		const id = page.params.id;
		const resp = await fetch(`/api/movie/${id}.json`);
		const json = await resp.json();
		return {
			props: {
				movie: json
			}
		};
	};
</script>

<script>
	import MovieDetails from '$lib/MovieDetails.svelte';
	export let movie; // access prop from context
</script>

<MovieDetails {movie} />
