import { MOVIE_BASE_URL, MOVIE_ACCESS_TOKEN } from "@/app/config";
import { error } from "console";

export async function GET(){
    if (!MOVIE_BASE_URL){
        return new Response ("Movie api token not found", {
            status: 400,
        });
    }

    if(!MOVIE_ACCESS_TOKEN){
        return new Response("Movie base url not found", {
            status: 404,
        });

     
    }
    try{
           const request = await fetch (`${MOVIE_BASE_URL}/3/movie/popular`,{
            method: 'GET',
            headers:{
                'content-Type': 'application/json',
                'Authorization': `Bearer ${MOVIE_ACCESS_TOKEN}`
            },
        });
        if(!request.ok){
            throw new Error(`Request failed with status ${request.status}`);
        }
        const responseJson = await request.json();
        return new Response(JSON.stringify(responseJson), {
            status: 200,
            statusText: 'sucess',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch(error: any){
        return new Response(JSON.stringify({ error: error.message}),{
            status: 500,
            statusText: 'failed',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
           
    }
    
}