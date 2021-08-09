// TheMovieDb API Fetch functions
export function fetchMoviesByQuery(search:string): Promise<Response> {
    return fetch(_movieQueryUrl(search),_getTokenObj())
}
export function fetchMovieById(id:string): Promise<Response> {
    return fetch(_movieUrl(id),_getTokenObj())    
}
export function posterUrl(poster:string, size='original', path='https://image.tmdb.org/t/p/'):string {
    return path + size + poster  
}

export function fetchPeopleByQuery(search:string): Promise<Response> {
    return fetch(_peopleUrl(search),_getTokenObj())
}
export function fetchPersonById(id:string): Promise<Response> {
    return fetch(_personUrl(id),_getTokenObj())
}

// -------------------------- Private Methods -------------------------
function _peopleUrl(search:string) {
    return `https://api.themoviedb.org/3/search/person?query=${search}`
}
function _personUrl(id:string) {
    return `https://api.themoviedb.org/3/person/${id}?append_to_response=images`
}
function _movieUrl(id:string) {   
    return `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images,videos`
}
function _movieQueryUrl(search:string) {
    if (search === ':trending') {
        return 'https://api.themoviedb.org/3/trending/movie/week'
    } else if (search === ':popular') {
        return 'https://api.themoviedb.org/3/movie/popular'
    } else if (search === ':playing') {
        return 'https://api.themoviedb.org/3/movie/now_playing'
    } else if (search === ':upcoming') {
        return 'https://api.themoviedb.org/3/movie/upcoming'
    } else if (search === ':top') {
        return 'https://api.themoviedb.org/3/movie/top_rated'
    } else {
        return `https://api.themoviedb.org/3/search/movie?query="${search}"`
    }
}
function _getTokenObj() { 
    // add moviedb api token to .env file
    const TOKEN=import.meta.env.VITE_MOVIEDB_TOKEN
    return {
        method: 'GET',
        headers: new Headers(
        {
            'Authorization': `Bearer ${TOKEN}`, 
            'Content-Type': 'application/json'
        })
    } 
}