import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, ADD_MOVIE } from '../action/action';

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter(movie => movie.id !== action.payload) };
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
};