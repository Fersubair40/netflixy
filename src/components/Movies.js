
import React, { Fragment } from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyleHeader from './StyleHeader';
import StyleHeaderTitle from './StyleHeaderTitle';
import { movies } from '../staticData';
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie';
// import StyledFooter from './StyledFooter';
// import StyledLargeBtn from './StyledLargeBtn';

const Movies = () => (
	<Fragment>
		<StyleHeader>
			<FontAwesomeIcon icon="bars" text="help" />
			<StyleHeaderTitle>The Movie Recommender</StyleHeaderTitle>
			<FontAwesomeIcon icon="search" />
		</StyleHeader>
		{/* the list of movies */}
		<StyledHorizontalScroll>
			{movies.map(movie => (
				<Movie
					key={movie.id}
					name={movie.name}
					poster={movie.poster}
					duration={movie.duration}
					year={movie.year}
				/>
			))}
		</StyledHorizontalScroll>
		{/* <StyledFooter>
			<StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
		</StyledFooter> */}
	</Fragment>
);

export default Movies;