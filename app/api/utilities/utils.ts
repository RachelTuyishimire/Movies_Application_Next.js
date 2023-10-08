export async function getMovies(){
   try{
    const response = await fetch('/api/get-movies', {
        method: 'GET',
    })
    const results = await response.json();
    return results;
   } 
   catch(error){
    return error;
   }
}

export async function getMovieDetails(movieId: number) {
    const url = `/api/getMoviesDetails${movieId}`;
    try{
        const response = await fetch(url);
        if (!response.ok){
            return `Movie with id ${movieId} not found`
        }
        const result = await response.json();
        return result;
    }

    catch(error){
        return error
    }
    
}
export const getGenres = async() =>{
    try{
        const response = await fetch (`/api/get-genres`,{
            method:'GET',
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error;
    }
}





  





