const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "37dafa2118a6949402f4c704156e7c01",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
