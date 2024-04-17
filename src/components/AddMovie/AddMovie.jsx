import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import add from './AddMovie.module.css'

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
        const uniqueId = Date.now();
        dispatch({ type: 'ADD_MOVIE', payload: { ...newMovie, id: uniqueId } });
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
        <form onSubmit={handleSubmit} className={add.form}>
            <input type="text" name="title" value={newMovie.title} onChange={handleChange} placeholder="Name movie" required className={add.form__inputs}/>
            <input type="text" name="description" value={newMovie.description} onChange={handleChange} placeholder="Description" required className={add.form__inputs}/>
            <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} placeholder="Rating" required className={add.form__inputs}/>
            <input type="text" name="release_date" value={newMovie.release_date} onChange={handleChange} placeholder="Release date" required className={add.form__inputs}/>
            <input type="text" name="genre" value={newMovie.genre} onChange={handleChange} placeholder="Genre,..." required className={add.form__inputs}/>
            <input type="text" name="actors" value={newMovie.actors} onChange={handleChange} placeholder="Actors,.." required className={add.form__inputs}/>
            <input type="text" name="director" value={newMovie.director} onChange={handleChange} placeholder="Director" required className={add.form__inputs}/>
            <input type="url" name="image" value={newMovie.image} onChange={handleChange} placeholder="URL image" required className={add.form__inputs}/>
            <button type="submit">Add movie</button>
        </form>
    );
}

export default AddMovie;
