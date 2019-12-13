import React from 'react';
import { Route } from 'react-router-dom';
import StyleMovieContainer from './StyledMovieContainer';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

const App = () => {
	return (
		<StyleMovieContainer>
			<Route exact path="/" component={Movies} />
			<Route exact path="/movies/:id" component={MovieDetails} />
		</StyleMovieContainer>
	);
};

export default App;
