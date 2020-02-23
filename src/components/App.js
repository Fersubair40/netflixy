import React from 'react';
import { Route } from 'react-router-dom';
import StyleMovieContainer from './StyledMovieContainer';
import MovieDetails from './MovieDetails';
import MoviesContainer from '../containers/MoviesContainer';

const App = () => {
	return (
		<StyleMovieContainer>
			<Route exact path="/" component={MoviesContainer} />
			<Route exact path="/movies/:id" component={MovieDetails} />
		</StyleMovieContainer>
	);
};

export default App;
