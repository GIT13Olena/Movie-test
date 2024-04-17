export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const REMOVE_FROM_MOVIES = 'REMOVE_FROM_MOVIES';

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});

export const removeFromMovies = (movie) => ({
  type: 'REMOVE_FROM_MOVIES',
  payload: movie
});