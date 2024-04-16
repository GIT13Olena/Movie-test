import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/action/action';

function FavoritePage() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div>
      {favorites.map((movie) => (
        <div key={movie.id}>
            <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Рейтинг: {movie.rating}</p>
            <p>Дата випуску: {movie.release_date}</p>
          <button onClick={() => handleRemoveFromFavorites(movie.id)}>
            Видалити з фаворитів
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritePage;