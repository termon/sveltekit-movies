// src/routes/api/[id].json.ts
    
import type { EndpointOutput, Request } from '@sveltejs/kit';
import { fetchPersonById } from '$lib/helpers'
  
export async function get( req:Request ): Promise<EndpointOutput> {
    const id = req.params.id
    const resp = await fetchPersonById(id)
	if (resp.ok) {
		const json = await resp.json()
		return {
			status: resp.status,
			body: json
		} 
	}       
    // request failed
	return {
		status: resp.status,
	}    
}
