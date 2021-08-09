// Example Store - 
import { writable } from 'svelte/store';
import { fetchMoviesByQuery, fetchMovieById } from '$lib/helpers'
import type { IMovie, IShortMovie } from 'src/global';

interface MovieStore {
	movies: IShortMovie[],
	movie: IMovie,
	search: string
}

function createMovieStore() {
	const { subscribe, set, update } = writable<MovieStore>({movies:[], movie:undefined, search:''});

	return {
		subscribe,
		searchMovies: async (q) => { 
            const resp = await fetchMoviesByQuery(q);
			if (resp.ok) {
				const json:IMovie[] = await resp.json()
	            update(s => {
					return { movies:json, ...s}
				});       
        	}
		},
		loadMovie: async (id) => {
			const resp = await fetchMovieById(id)
			if (resp.ok) {
				const json = await resp.json()
				update(s => {
					return { movie: json, ...s }
				} )
			} 	
		},
		getMovies: (s:MovieStore) => s.movies,
		getMovie: (s:MovieStore) => s.movie,		
		reset: () => set( {movies:[], movie:undefined, search:''})
	};
}
export const movieStore = createMovieStore()
