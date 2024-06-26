import axiosClient from "./axiosClient";

export const category = {
  movie: "movies",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  upcoming: "upcoming",
  popular: "popular",
  on_air: "on_air",
};

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    if (cate === "movies") cate = "movie";
    const url = cate + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    if (cate === "movies") cate = "movie";
    const url = "search/" + cate;
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    if (cate === "movies") cate = "movie";
    const url = cate + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    if (cate === "movies") cate = "movie";
    const url = cate + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    if (cate === "movies") cate = "movie";
    const url = cate + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
