// src/routes/api/[search].json.ts
    
import type { EndpointOutput, Request } from '@sveltejs/kit';
import { fetchMoviesByQuery } from '$lib/helpers'

export async function get( req:Request  ): Promise<EndpointOutput> {
    const search = req.params.search
    if (search && search.length > 0) {
        const resp = await fetchMoviesByQuery(search)
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