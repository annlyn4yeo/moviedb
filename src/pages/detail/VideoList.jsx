import React, { useState, useEffect, useRef } from "react";
import tmdbApi from "../../api/tmdbApi";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const VideoList = (props) => {
  const { category } = useParams();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, props.id);
      setVideo(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);

  return (
    <>
      {video.map((v, i) => (
        <Video key={i} item={v} />
      ))}
    </>
  );
};

const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
