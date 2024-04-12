import React, { useState, useEffect } from "react";
import "./MovieGrid.scss";

import { MovieCard } from "../movie-card/MovieCard";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

const MovieGrid = (props) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(movieType.upcoming, { params });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setMovies(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <MovieCard category={props.category} item={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieGrid;
