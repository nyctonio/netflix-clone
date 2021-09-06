import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({ title, fetchURL, isLarge }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL);
      setmovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {});
    }
  };

  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`cursor-pointer row__poster  ${
              isLarge && "row__posterLarge"
            } `}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
          // console.log(`${base_url}${movie.poster_path}`);
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
