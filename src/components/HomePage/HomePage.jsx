import { useDispatch, useSelector } from 'react-redux'; 
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { addToFavorites } from '../../redux/action/action';
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

    const filteredMovies = moviesData.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Пошук фільмів..." />
            <div className={home.movie}>
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className={home.movie__card}>
                        <NavLink to={`/movie/${movie.id}`}>
                            <img src={movie.image} alt={movie.title} className={home.movie__poster}/>
                            <h2 className={home.movie__title}>{movie.title}</h2>
                            <p>Рейтинг: {movie.rating}</p>
                            <p>Дата випуску: {movie.release_date}</p>
                        </NavLink>
                        {!favorites.some(favorite => favorite.id === movie.id) && (
                            <button onClick={() => handleAddToFavorites(movie)}>Додати до фаворитів</button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomePage;
