import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import openai from "../utils/openai";
import model from "../utils/gemini";
import { API_OPTIONS } from "../utils/constant";
import { addMovieResult } from "../utils/gptSlice";

const SearchBar = () => {
  const language = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  // console.log(language);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    console.log(searchText.current.value);

    const aiQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal , Koi Mil Gaya";

    // const results = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: aiQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const result = await model.generateContent(aiQuery);
    const response = await result.response;
    // console.log(response);
    // console.log(response.candidates[0].content.parts[0].text);

    const text = response.text();
    // console.log(text);
    // console.log(text.split(","));
    const getMovies = text.split(",");
    console.log(getMovies);

    if (getMovies.length > 5) {
      setError(true);
      dispatch(addMovieResult({ moviesN: null, moviesResults: null }));
      return;
    }

    setError(false);

    const promiseArray = getMovies.map((movie) => {
      return searchMovieTMDB(movie);
    });

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addMovieResult({ moviesN: getMovies, moviesResults: tmdbResults })
    );

    // console.log(results.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-3/4 lg:w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-md text-black"
          placeholder={lang?.[language]?.placeholder}
        />
        <button
          className="col-span-3 m-4 py-4 px-3 bg-red-700 text-lg text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang?.[language]?.search}
        </button>
        {error && (
          <p className="col-span-10 text-red-600 font-bold mx-4">
            Please provide me with more information
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
