// import { NavLink } from "react-router-dom";
// import {useState} from "react"
// import moviesData from '../db.json'
// import home from './HomePage.module.css'

// function HomePage() {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value); 
//     };

//     const filteredMovies = moviesData.movies.filter((movie) => 
//         movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
//     );

//     return(
//       <>
//       <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Пошук фільмів..." />
//         <div className={home.movie}>
            
//             {filteredMovies.map((movie) => (
//                 <NavLink to={`/movie/${movie.id}`} key={movie.id}>
//                     <div key={movie.id} className={home.movie__card}>
//                         <img src={movie.image} alt={movie.title} className={home.movie__poster}/>
//                         <h2 className={home.movie__title}>{movie.title}</h2>
//                         <p>Рейтинг: {movie.rating}</p>
//                         <p>Дата випуску: {movie.release_date}</p>
//                     </div>
//                 </NavLink>
//             ))}
//         </div>
//         </>
//     )
// }

// export default HomePage;

import {  useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import {useState} from "react"
import moviesData from '../db.json'
import home from './HomePage.module.css'
import { addToFavorites } from '../../redux/action/action';

function HomePage() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const handleAddToFavorites = (movie) => {
        dispatch(addToFavorites(movie));
    };

    const filteredMovies = moviesData.movies.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return(
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
        <button onClick={() => handleAddToFavorites(movie)}>Додати до фаворитів</button>
    </div>
))}

        </div>
        </>
    )
}

export default HomePage;
