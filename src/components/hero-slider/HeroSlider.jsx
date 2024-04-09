import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./HeroSlider.scss";

export default function HeroSlider() {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, { params });
        setMovieItems(response.results.slice(0, 6));
        console.log(response);
      } catch {
        console.log("Api Error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <img src={apiConfig.originalImage(movie?.backdrop_path)}></img>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
