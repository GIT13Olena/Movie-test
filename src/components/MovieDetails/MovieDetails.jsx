import { useParams } from 'react-router-dom';
import moviesData from '../db.json';

function MovieDetails() {
  const { id } = useParams();
  const movie = moviesData.movies.find(movie => movie.id === Number(id));

  if (!movie) {
    return <p>Фільм не знайдено</p>;
  }

  return (
    <div>
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Рейтинг: {movie.rating}</p>
      <p>Дата випуску: {movie.release_date}</p>
      <p>Жанр: {movie.genre.join(', ')}</p>
      <p>Актори: {movie.actors.join(', ')}</p>
      <p>Режисер: {movie.director}</p>
    </div>
  );
}

export default MovieDetails;
