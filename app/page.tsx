'use client';
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import {NEXT_PUBLIC_IMAGE_BASE_URL } from "./config";
import { getMovies } from "./api/utilities/utils";
import MovieCarousel from "./slider/page";
import Footer from "./footer/page";
import Link from "next/link"



interface Movie {
  id: number;
  poster_path: string;
  title: string;
  genre_id: number[];
  overview: string;
}
type MovieData = {
  results: Movie[];
};
export default function Home() {
  const [movies, setMovies] = useState<MovieData | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
        console.log({ movies: moviesData });
      } 
      catch (error) {
        console.error('Error fetching movies:', error);
      }
      
    })();
  }, []);
  return (
  
    
  <main>

    <div className="grid grid-cols-9 bg-black">
  {movies && movies.results ? (
    movies.results.map((item) => (
      <Link href={`/movie/${item.id}`} key={item.id}>
        <div
          key={item.id}
          className="relative overflow-hidden  p-4 rounded shadow transition-transform hover:transform hover:translate-y-0 hover:-translate-x-2 hover:scale-105"
        >
        </div>
      </Link>
    ))
  ) : (
    <div>Loading movies...</div> 
  )}
</div>

<div className="navbar-lg py-8 bg-black">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="movie text-5xl font-bold text-white ml-10">
                M<span className="text-yellow-500 ">oo</span>vie
              </h1>
            </div>
            <div className="flex items-center">
              <input className="search px-20 border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white-100" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center">
              <ul className="navbar-nav flex items-center gap-8 ml-10">
                <li className="nav-item">
                  <a className="nav-link text-white text-2xl" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-2xl" href="">
                    My List
                  </a>
                </li>
                <li className="nav-item">
                  <button className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:bg text-lg mr-20" type="button">
                    <a className="nav-link active text-black text-lg" href="/sign Up">
                      Sign Up
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <MovieCarousel/>
   
    


  <div className="grid grid-cols-5 gap-4 bg-black">
    {movies &&
      movies.results.map((item) => (
        <Link href={`/movie/${item.id}`} key={item.id}>
        <div
          key={item.id}
          className="relative overflow-hidden bg-black p-4 rounded shadow transition-transform hover:transform hover:translate-y-0 hover:-translate-x-2 hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <div className="relative group">
            <img
              src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
              className="w-full h-auto mb-3 transition-opacity group-hover:opacity-90"
            />
      
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        
            </div>
            
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-base">{item.overview}</p> */}
          
        </div>
        </Link>

      ))}
     

  </div>
  <Footer/>
</main>


  );
}