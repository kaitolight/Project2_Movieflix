import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/searchbar.css";
import emptyImage from "../assets/emptyImage.svg";

function Searchbar() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length >= 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=20d0a760d82811eb01a3f02b31edc400&query=${search}&language=en-US&page=1&include_adult=false`
        )
        .then((response) => [setMoviesData(response.data.results)]);
    }
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return navigate(`/results/${search}`);
  };

  return (
    <div className="seachbar-component">
      <form onSubmit={handleSubmit}>
        <input
          className="movie-input"
          type="text"
          placeholder="   Nom de votre film ?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {moviesData.length !== 0 && search !== "" && (
        <div className="movie-list">
          {moviesData.map((movie) => (
            <a className="movie-link" href={`/movies/${movie.id} `}>
              <img
                className="movie-img-searchbar"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : `${emptyImage}`
                }
                alt="Movie poster"
              />
              {movie.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
