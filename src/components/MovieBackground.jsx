import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const MovieBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);

  useTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1"
        }
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MovieBackground;
