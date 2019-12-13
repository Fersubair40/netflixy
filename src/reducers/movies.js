import { handleActions } from "redux-actions";
import { GET_MOVIES } from "../constants/actionTypes";
import { SELECT_MOVIE } from "../constants/actionTypes";

export default handleActions(
  {
    [GET_MOVIES]: (state, action) => state
  },
  {
    [SELECT_MOVIE]: (state, action) => state
  },
  1
);
