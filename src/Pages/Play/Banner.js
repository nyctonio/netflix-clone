import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";

export default function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        data.data.results[Math.floor(Math.random() * data.data.results.length)]
      );
      return data;
    }
    fetchData();
  }, []);

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="max-w-xs md:max-w-md banner__description">
          {movie.overview
            ? truncate(movie?.overview, 150)
            : "Movie description ..."}
        </h1>
      </div>
      <div className=" banner--fadebottom"></div>
    </div>
  );
}
