import React, { Fragment } from 'react';
import { movies } from '../staticData';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyleHeader from './StyleHeader';
import StyleHeaderTitle from './StyleHeaderTitle';
import StyledHorizontalScroll from './StyledHorizontalScroll';

const Movies = () => (
	<Fragment>
		<StyleHeader>
			<FontAwesomeIcon icon="bars" text="help" />
			<StyleHeaderTitle> The Movie Recommender</StyleHeaderTitle>
			<FontAwesomeIcon icon="search" />
		</StyleHeader>

		<StyledHorizontalScroll>
			{movies.map(movie => (
				<div
					style={{
						border: '1px solid red',
						margin: '1rem',
					}}
					key={movie.id}
				>
					{movie.name}
				</div>
			))}
		</StyledHorizontalScroll>
	</Fragment>
);

export default Movies;
