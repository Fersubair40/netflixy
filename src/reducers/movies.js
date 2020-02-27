import { handleActions } from 'redux-actions';
import { GET_MOVIES, SET_MOVIES } from '../constants/actionTypes';
import { SELECT_MOVIE } from '../constants/actionTypes';

export default handleActions(
	{
		[SET_MOVIES]: (state, action) => action.payload,
	},
	{
		[GET_MOVIES]: (state, action) => state,
	},
	{
		[SELECT_MOVIE]: (state, action) => state,
	},
	1
);
