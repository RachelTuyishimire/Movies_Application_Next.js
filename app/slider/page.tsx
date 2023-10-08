"use client"
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { images } from "./json";

const MovieCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const goToNextImage = () => {
    const newImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const handleWatchNow = () => {
    console.log("Watch Now button clicked");
  };

  const handleAddToFavorites = () => {
    console.log("Add to Favorites button clicked");
  };

  return (
    <>
      <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${images[currentImageIndex].img})`, height: "800px" }}>
          <div className="left absolute top-1/2 transform -translate-y-1/2 left-4">
            <IoIosArrowBack className="left-icon text-black text-4xl" onClick={goToPreviousImage} />
          </div>

          <div className="center flex flex-col ml-20 justify-center text-yellow h-full">
          <h1 className="center-h1 text-4xl">{images[currentImageIndex].title}</h1>
            <p className="center-p">{images[currentImageIndex].duration}</p>
           


            <div className="center-buttons flex gap-4">
              <button className="watch bg-yellow-500 text-white text-lg py-2 px-4 rounded-md" onClick={handleWatchNow}>
                Watch Now
              </button>
              <button className="favorite bg-transparent text-yellow-500 text-lg py-2 px-4 rounded-md border border-yellow-500 " onClick={handleAddToFavorites}>
                Add To Favorite
              </button>
            </div>
          </div>

          <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
            <IoIosArrowForward className="right-icon text-white text-4xl" onClick={goToNextImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCarousel;