import React from "react";
import { useParams } from "react-router";
import PageHeader from "../components/page-header/PageHeader";
import { category as categ } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

export const Catalog = () => {
  const { category } = useParams();
  return (
    <>
      <PageHeader>{category === categ.movie ? "Movies" : "TV Series"}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};
