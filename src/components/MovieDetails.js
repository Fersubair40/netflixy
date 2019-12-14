import React from 'react';
import StyledHeader from './StyleHeader';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeaderLink from './StyleHeaderLink';

const MovieDetails = () => {
	return (
		<StyledHeader>
			<StyledHeaderLink href='/'>
			<FontAwesomeIcon icon="chevron-left" text="Go Back" />
			</StyledHeaderLink>
		</StyledHeader>
	)
};

export default MovieDetails;
