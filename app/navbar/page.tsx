import React, { useState, useEffect } from 'react';
import { NEXT_PUBLIC_IMAGE_BASE_URL } from '@/app/config';
import { searchMovies } from '../api/search-movies/routes';
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchMovies(query);
      setResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error occurred while searching movies", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="bg-gray-100">
      <nav className="bg-black py-5">
  <div className="container mx-auto flex items-center justify-between">
    <div className="text-white font-bold text-4xl">
      M<span className="text-yellow-500">oo</span>vie
    </div>
    <div className="sm:hidden"></div>
    <div className="flex items-center">
      <input
        type="search"
        placeholder="Search for movies..."
        className="search-input px-4 py-2 rounded-full bg-gray-700 border-none text-white placeholder-gray-400 ml-[-30%]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="hidden sm:flex space-x-4 ml-[10%] cursor-pointer">
        <li className="text-lg font-semibold text-yellow-500 underline">
            Home
        </li>
        <li className="text-lg  text-white cursor-pointer">
            My List
        </li>
      </ul>
      <button
        onClick={handleSearch}
        className="text-lg bg-yellow-500 px-6 py-2 rounded-lg text-white ml-[15%]"
      >
        Sign in
      </button>
    </div>
  </div>
</nav>

      <div className="container mx-auto p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          results.length > 0 && (
            <div className="grid grid-cols-5 gap-4">
              {results.map((movie: Movie) => (
                <Link href={`/movie/${movie.id}`} key={movie.title}>
                  <div className="bg-black rounded-lg shadow-md p-1 text-white gap-1">
                    {movie.poster_path && (
                      <img
                        src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-96 object-cover rounded-md mb-2 gap-4"
                      />
                    )}
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p className="text-gray-400 text-sm mt-2">Release Date: {movie.release_date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MovieSearch;