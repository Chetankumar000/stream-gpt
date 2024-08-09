import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const movieTrailers = json.results.filter(
      (movie) => movie.type === "Trailer"
    );

    const trailer = movieTrailers ? movieTrailers[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useTrailer;
