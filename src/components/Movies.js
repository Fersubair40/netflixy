import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyleHeader from './StyleHeader';
import StyleHeaderTitle from './StyleHeaderTitle';




const Movies = () => (
	<StyleHeader>
		<FontAwesomeIcon icon="bars" text="help" />
		<StyleHeaderTitle> The Movie Recommender</StyleHeaderTitle>
		<FontAwesomeIcon icon="search" />
	</StyleHeader>
)

export default Movies;