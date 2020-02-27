import { createAction } from 'redux-actions';
import { apiPayLoadCreator } from '../utlis/appUtils';
import { API, SET_MOVIES } from '../constants/actionTypes';
import { normalize, schema } from 'normalizr';

const getMoviesAC = createAction(API, apiPayLoadCreator);

export const getMovies = () => getMoviesAC({ url: '/vcvx0', onSuccess: setMovies });

function setMovies(movies) {
	const movieSchema = new schema.Entity('movies');
	const movieListSchema = new schema.Array(movieSchema);
	const normalizedData = normalize(movies, movieListSchema);

	console.log(movies);
	return { type: SET_MOVIES, payload: normalizedData.entities.movies };
}
