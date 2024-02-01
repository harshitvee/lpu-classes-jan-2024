import { useState } from "react";
import axios from "axios";
import Movies from "../Components/Movies";
function Home() {
  const [movieSearchInput, setMovieSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // start searching

    // Todo : keep sensitive info in .env file
    const endpoint = `https://www.omdbapi.com/?apikey=27b2f0a3&s=${movieSearchInput}`;
    try {
      const response = await axios.get(endpoint);
      const { Search, Response, Error } = response.data;
      if (Response === "True") {
        setMovies(Search);
      } else {
        setError(Error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  let component = null;
  if (isLoading) {
    component = <h1>Loading ....</h1>;
  } else {
    if (error) {
      component = <h1>{error}</h1>;
    } else {
      component = <Movies movies={movies} />;
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie-search"
          id="movie-search"
          value={movieSearchInput}
          onChange={(e) => {
            setMovieSearchInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {component}
    </div>
  );
}

// loading <h1> loading </h1>

export default Home;
