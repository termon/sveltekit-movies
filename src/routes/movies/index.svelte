<script>
	import MovieSearch from '$lib/MovieSearch.svelte';
	import MovieDetails from '$lib/MovieDetails.svelte';
	import MovieList from '$lib/MovieList.svelte';

	let movies = [];
	let movie = undefined;
	let search = '';

	async function handleSearch(e) {
		search = e.detail.value;
		const resp = await fetch(`/api/movies/${search}.json`);
		const json = await resp.json();
		console.log(search, json);
		movies = json.results;
	}
	async function handleSelected(e) {
		const id = e.detail.value;
		const resp = await fetch(`/api/movie/${id}.json`);
		// check if request returned a movie
		if (resp.ok) {
			const json = await resp.json();
			movie = json;
		}
	}
	function handleClear() {
		search = '';
		movies = [];
		movie = undefined;
	}
</script>

<h3>Movies</h3>

<MovieSearch on:search={handleSearch} on:clear={handleClear} />

<MovieDetails {movie} />

<MovieList on:selected={handleSelected} {movies} />
