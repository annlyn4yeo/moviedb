import React, { useState, useEffect } from "react";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

export default function HeroSlider() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, { params });
        setMovieItems(response.results.slice(0, 4));
      } catch {
        console.log("Api Error");
      }
    };
    getMovies();
  }, []);

  return <div className="hero-slider"> HeroSlider</div>;
}
