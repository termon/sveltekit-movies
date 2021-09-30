<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import type { IShortMovie } from 'src/global';
	import {posterUrl} from './helpers'

	export let movies:IShortMovie[] = [];

	const dispatch = createEventDispatcher();

	function dispatchSelected(id) {
		dispatch('selected', { value: id });
	}
</script>

{#each movies as movie}
	<img style="cursor:pointer" class="img-fluid img-thumbnail p-2 m-2 rounded col-lg-2 col-md-3 col-sm-4 col-6 pe-auto"
		 src="{posterUrl(movie.poster_path)}"
		 on:click={() => dispatchSelected(movie.id)} 
		 alt="{movie.title}"
	/>
{/each}

