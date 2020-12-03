import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgArrowDownAlt = (props: IconProps): JSX.Element => {
	return (
		<svg
			className='arrow-down-alt_svg__ee-svg'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			viewBox='0 0 20 20'
			{...props}
		>
			<path d='M5 6l5 5 5-5 2 1-7 7-7-7z' />
		</svg>
	);
};

export default withEnhance(SvgArrowDownAlt);