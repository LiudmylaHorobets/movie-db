import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

export function MovieCard({
  id,
  title,
  popularity,
  overview,
  image = "src/assets/images/movies-photo.jpeg",
}: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.screensaver}
        src={image}
        alt="Movie screensaver"
        // width="300"
        // height="250"
      />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <span className={styles.overview}>{overview}</span>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
