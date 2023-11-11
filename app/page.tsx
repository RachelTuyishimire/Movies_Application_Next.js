'use client';
import MovieSearch from "./navbar/page";
import Footer from "./footer/page";
import SliderCarousel from "./slider/page";
import CategoroesList from "./categories/page";




export default function Home() {
  return (
    <main>
      <MovieSearch/>
      <SliderCarousel/>

      <CategoroesList/>
      <Footer/>

    </main>
  );
}