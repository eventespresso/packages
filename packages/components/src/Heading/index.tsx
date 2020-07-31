import React from 'react';
import classNames from 'classnames';
import { Heading as HeadingAdapter } from '@eventespresso/adapters';

import { HeadingProps } from './types';

import './style.scss';

export const Heading: React.FC<HeadingProps> = ({ topBordered, ...props }) => {
	const className = classNames(props.className, topBordered && 'ee-heading--top-bordered');

	return <HeadingAdapter {...props} className={className} />;
};

export default Heading;
