// src/routes/api/movies/[search]-[page].json.ts
    
import type { EndpointOutput, Request } from '@sveltejs/kit';
import { fetchMoviesByQuery } from '$lib/helpers'

export async function get( req:Request  ): Promise<EndpointOutput> {
    const search = req.params.search
	const page = Number.parseInt(req.params.page) ?? 1
    if (search && search.length > 0) {
        const resp = await fetchMoviesByQuery(search,page)
        const json = await resp.json()
		return {
			status: resp.status,
			body: json
		}        
    }
	return {
		status: 404,
		body: []
	}    
}