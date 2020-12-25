import classNames from 'classnames';

import { Heading as HeadingAdapter } from '@eventespresso/adapters';
import type { HeadingProps } from './types';

import './style.scss';

export const Heading: React.FC<HeadingProps> = ({ topBordered, ...props }) => {
	const className = classNames('ee-heading', topBordered && 'ee-heading--top-bordered', props.className);

	return <HeadingAdapter {...props} className={className} />;
};
