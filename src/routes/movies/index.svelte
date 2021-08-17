<script>
	import MovieSearch from '$lib/MovieSearch.svelte';
	import MovieDetails from '$lib/MovieDetails.svelte';
	import MovieList from '$lib/MovieList.svelte';
	import Pagination from '$lib/Pagination.svelte';

	let movies = [];
	let movie = undefined;
	let search = '';

	let totalPages = 0
	let page = 1

	async function loadData() {
		const resp = await fetch(`/api/movies/${search}-${page}.json`);
		const json = await resp.json();
		//console.log('results', json)
		movies = json.results;
		totalPages = json.total_pages
		page = json.page // ?? do we need this
	}
	async function handleSearch(e) {
		search = e.detail.value;
		await loadData()
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
		search = ''
		movies = []
		movie = undefined
	}

	async function handlePage(e) {
		page = e.detail.page
		await loadData()
	}
</script>

<h3>Movies</h3>

<MovieSearch on:search={handleSearch} on:clear={handleClear} />

<MovieDetails {movie} />

<MovieList on:selected={handleSelected} {movies} />
{#if movies.length > 0}
	<Pagination totalpages={totalPages} page={page} on:page={handlePage}/>
{/if}

