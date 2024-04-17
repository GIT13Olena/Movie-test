import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/action/action';
import favorite from './FavoritePage.module.css';

function FavoritePage() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className={favorite.movie__all}>
      {favorites.map((movie) => (
        <>
        <div key={movie.id}> 
        <NavLink to={`/movie/${movie.id}`} className={favorite.movie__link}>
            <img src={movie.image} alt={movie.title} className={favorite.poster}/>
          <h2 className={favorite.movie__title}>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
            <p>Release date: {movie.release_date}</p>
            </NavLink>
          <button onClick={() => handleRemoveFromFavorites(movie.id)} className={favorite.button__remove}>
          Remove from favorites 
          </button>
          </div>
          </>
      ))}
    </div>
  );
}

export default FavoritePage;