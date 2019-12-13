import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovies";

export default combineReducers({
  movies,
  selectedMovie
});
