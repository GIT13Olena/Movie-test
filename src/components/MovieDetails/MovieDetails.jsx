import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate  } from 'react-router-dom';
import detalis from './MovieDetails.module.css';

function MovieDetails() {
  const { id } = useParams();
  let navigate = useNavigate();
  const moviesData = useSelector(state => state.movies);
  const movie = moviesData.find(movie => movie.id === Number(id));
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const handleEdit = (updatedMovie) => {
    dispatch({ type: 'EDIT_MOVIE', payload: updatedMovie });
    setEditMode(false);
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className={detalis.button__navigate}>Повернутися назад</button>

      {editMode ? (
        <EditMovie movie={movie} onEdit={handleEdit} onCancel={() => setEditMode(false)} />
      ) : (
        <div className={detalis.detalis__all}>
          <img src={movie.image} alt={movie.title} className={detalis.poster}/>
          <div>
            <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Genre: {movie.genre}</p>
          <p>Actors: {movie.actors}</p>
          <p>Director: {movie.director}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
          
        </div>
      )}
    </div>
  );
}

function EditMovie({ movie, onEdit, onCancel }) {
  const [updatedMovie, setUpdatedMovie] = useState(movie);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedMovie({
      ...updatedMovie,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(updatedMovie);
  };

  return (
    <form onSubmit={handleSubmit} className={detalis.form}>
      <input type="text" name="title" value={updatedMovie.title} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="text" name="description" value={updatedMovie.description} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="number" name="rating" value={updatedMovie.rating} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="text" name="release_date" value={updatedMovie.release_date} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="text" name="genre" value={updatedMovie.genre} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="text" name="actors" value={updatedMovie.actors} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="text" name="director" value={updatedMovie.director} onChange={handleChange} required className={detalis.form__inputs}/>
      <input type="url" name="image" value={updatedMovie.image} onChange={handleChange} required className={detalis.form__inputs}/>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default MovieDetails;
