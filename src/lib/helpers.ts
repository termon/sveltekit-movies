// TheMovieDb API Fetch functions
export function fetchMoviesByQuery(search:string, page=1): Promise<Response> {
    console.log("QueryUrl", _movieQueryUrl(search,page ))
    return fetch(_movieQueryUrl(search, page),_getTokenObj())
}
export function fetchMovieById(id:string): Promise<Response> {
    return fetch(_movieUrl(id),_getTokenObj())    
}
export function fetchPeopleByQuery(search:string): Promise<Response> {
    return fetch(_personQueryUrl(search),_getTokenObj())
}
export function fetchPersonById(id:string): Promise<Response> {
    return fetch(_personUrl(id),_getTokenObj())
}
export function posterUrl(poster:string, size='original', path='https://image.tmdb.org/t/p/'):string {
    return path + size + poster  
}

export function pagination(c:number, m:number): any[] {
    const current = c
    const last = m
    const delta = 4
    const left = current - delta
    const right = current + delta + 1
    const range = []
    const rangeWithDots = []
  

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    let l = undefined
    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    console.log(`paginate page:${c} Max:${m} ArrayLength:${rangeWithDots.length}`)
    return rangeWithDots;
}

// -------------------------- Private Methods -------------------------
function _personUrl(id:string) {
    return `https://api.themoviedb.org/3/person/${id}?append_to_response=images`
}
function _movieUrl(id:string) {   
    return `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images,videos`
}
function _personQueryUrl(search:string) {
    if (search === ':popular') {
        return `https://api.themoviedb.org/3/person/popular`
    } else {
       return `https://api.themoviedb.org/3/search/person?query=${search}`
    }
}
function _movieQueryUrl(search:string, page=1) {
    if (search === ':trending') {
        return `https://api.themoviedb.org/3/trending/movie/week?page=${page}`
    } else if (search === ':popular') {
        return `https://api.themoviedb.org/3/movie/popular?page=${page}`
    } else if (search === ':playing') {
        return `https://api.themoviedb.org/3/movie/now_playing?page=${page}`
    } else if (search === ':upcoming') {
        return `https://api.themoviedb.org/3/movie/upcoming?page=${page}`
    } else if (search === ':top') {
        return `https://api.themoviedb.org/3/movie/top_rated?page=${page}`
    } else {
        return `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}`
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