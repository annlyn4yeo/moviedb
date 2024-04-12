import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./HeroSlider.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button, { OutlineButton } from "../button/Button";

export default function HeroSlider() {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, { params });
        setMovieItems(response.results.slice(1, 6));
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
        // autoplay={delay: 3000 }
      >
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={movie}
                className={`${isActive ? "active" : ""}`}
              ></HeroSlideItem>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const bg = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              onCLick={() => {
                history.push("/movie/" + item.id);
              }}
            >
              Watch this now
            </Button>
            <OutlineButton onCLick={() => console.log("trailerClick")}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
