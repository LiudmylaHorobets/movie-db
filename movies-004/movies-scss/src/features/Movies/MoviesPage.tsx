import { Movie, fetchMovies } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";

import styles from "./MoviesPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
}

export function MoviesPage({ movies, loading }: MoviesProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <h3>Loading..</h3>
        ) : (
          movies.map((m) => (
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.title}
              popularity={m.popularity}
              overview={m.overview}
              image={m.image}
            />
          ))
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(MoviesPage);
