import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function SingleMovie() {
  const [movie, setMovie] = useState({});
  const { imdbId } = useParams();
  async function fetchMovie() {
    const apiKey = import.meta.env.VITE_OMDB_KEY;
    const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;
    const response = await axios.get(endpoint);
    setMovie(response.data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <p>Title : {movie.Title}</p>
      <p>Year : {movie.Year}</p>
      <p>Rated : {movie.Rated}</p>
    </div>
  );
}
export default SingleMovie;
