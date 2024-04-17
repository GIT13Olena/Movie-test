import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddMovie() {
    const dispatch = useDispatch();
    const [newMovie, setNewMovie] = useState({
        id: '',
        title: '',
        description: '',
        rating: '',
        release_date: '',
        genre: [],
        actors: [],
        director: '',
        image: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewMovie({
            ...newMovie,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        setNewMovie({
            id: '',
            title: '',
            description: '',
            rating: '',
            release_date: '',
            genre: [],
            actors: [],
            director: '',
            image: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={newMovie.title} onChange={handleChange} placeholder="Назва фільму" required />
            <input type="text" name="description" value={newMovie.description} onChange={handleChange} placeholder="Опис" required />
            <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} placeholder="Рейтинг" required />
            <input type="text" name="release_date" value={newMovie.release_date} onChange={handleChange} placeholder="Дата випуску" required />
            <input type="text" name="genre" value={newMovie.genre} onChange={handleChange} placeholder="Жанр" required />
            <input type="text" name="actors" value={newMovie.actors} onChange={handleChange} placeholder="Актори" required />
            <input type="text" name="director" value={newMovie.director} onChange={handleChange} placeholder="Режисер" required />
            <input type="url" name="image" value={newMovie.image} onChange={handleChange} placeholder="URL зображення постера" required />
            <button type="submit">Додати фільм</button>
        </form>
    );
}

export default AddMovie;
