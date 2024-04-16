import { NavLink } from "react-router-dom";
import {useState} from "react"
import moviesData from '../db.json'
import home from './HomePage.module.css'

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const filteredMovies = moviesData.movies.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return(
      <>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Пошук фільмів..." />
        <div className={home.movie}>
            
            {filteredMovies.map((movie) => (
                <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className={home.movie__card}>
                        <img src={movie.image} alt={movie.title} className={home.movie__poster}/>
                        <h2 className={home.movie__title}>{movie.title}</h2>
                        <p>Рейтинг: {movie.rating}</p>
                        <p>Дата випуску: {movie.release_date}</p>
                    </div>
                </NavLink>
            ))}
        </div>
        </>
    )
}

export default HomePage;


