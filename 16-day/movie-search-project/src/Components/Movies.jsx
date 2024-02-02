import { Link } from "react-router-dom";
import styles from "./Movies.module.css";
function Movies({ movies }) {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          className={styles.movieLink}
          to={`movie/${movie.imdbID}`}
        >
          <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
          <h3 className={styles.title}>{movie.Title} </h3>
        </Link>
      ))}
    </div>
  );
}
export default Movies;
