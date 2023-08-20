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





