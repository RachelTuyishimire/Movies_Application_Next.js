// 'use client'
// import { useState, useEffect } from "react";
// import { getMovieDetails } from "@/app/utilities/utils";
// import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";


// const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
//   const [movieDetail, setMovieDetail] = useState<any>(null);

//   useEffect(() => {
//     const fetchMovieDetail = async () => {
//       try {
//         const movieDetailData = await getMovieDetails(movieId);
//         setMovieDetail(movieDetailData);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//         console.log(movieDetail);
//       }
//     };

//     fetchMovieDetail();
//   }, [movieId]);

//   if (!movieDetail) {
//     return <p>Loading...</p>;
//   }

//   const { title, poster_path, overview, release_date, rating } = movieDetail;

//   return (
//     <div className="bg-black text-white p-4 mb-3 min-h-screen">
//       <div className="flex items-center">
//         <img
//           src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${poster_path}`}
//           alt={title}
//           className="mr-4"
//         />
//         <div>
//           <h1 className="text-2xl font-bold">{title}</h1>
//           <p className="movie-overview">{overview}</p>
//           <div>
//             <p>
//               <span className="font-bold">Release Date:</span> {release_date}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MovieDetail;

'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const [movieDetail, setMovieDetail] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const movieDetailData = await getMovieDetails(movieId);
        setMovieDetail(movieDetailData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        console.log(movieDetail);
      }
    })();
  }, [movieId]);

  return (
    <div className="flex bg-black" style={{height:"100vh"}}>
      {movieDetail && (
        <div className="flex">
          <div>

            
          <img
            src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-full h-auto rounded-3xl mt-8 ml-12"
            style={{ width: "40vw", height: "85vh" }}
          />
           <button
              className="bg-yellow-500 text-black mt-4 ml-11 py-6 px-4 rounded-2xl"
              style={{ width: "30vw" }}
            >
              WATCH NOW
            </button>
</div>
          <div className="ml-16 mt-64 justify-center text-2xl text-white " >
            
            <h1 className="text-5xl font-bold mx-20 text-yellow-400 mb-16">{movieDetail.title}</h1>
            <p className="mr-60 ml-10">"{movieDetail.title}" is {movieDetail.overview}</p>
            <a href="#" className="ml-10  text-yellow-300 underline">Read more</a>
          
           
           
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
