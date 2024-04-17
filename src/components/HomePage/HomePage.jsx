import { useDispatch, useSelector } from 'react-redux'; 
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { addToFavorites } from '../../redux/action/action';
import { removeFromMovies } from '../../redux/action/action'; 
import home from './HomePage.module.css'

function HomePage() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites); 

    const [searchTerm, setSearchTerm] = useState('');
    const moviesData = useSelector(state => state.movies);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const handleAddToFavorites = (movie) => {
        dispatch(addToFavorites(movie));
    };

    const handleRemoveMovie = (movie) => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            dispatch(removeFromMovies(movie));
        }
    };

    const filteredMovies = moviesData.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search movie..." className={home.movie__search}/>
            <div className={home.movie}>
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className={home.movie__card}>
                        <NavLink to={`/movie/${movie.id}`} className={home.movie__link}>
                            <img src={movie.image} alt={movie.title} className={home.movie__poster}/>
                            <h2 className={home.movie__title}>{movie.title}</h2>
                            <p>Rating: {movie.rating}</p>
                            <p>Release date: {movie.release_date}</p>
                        </NavLink>
                        {!favorites.some(favorite => favorite.id === movie.id) && (
                            <button onClick={() => handleAddToFavorites(movie)} className={home.movie__button_add}>Add to favorite</button>
                        )}
                        <button onClick={() => handleRemoveMovie(movie)} className={home.movie__button_remove}>Remove movie</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomePage;
