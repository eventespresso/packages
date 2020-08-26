import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgRepeat = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			className='repeat_svg__ee-svg'
			fill='currentColor'
			height='1.25rem'
			viewBox='0 0 20 20'
			width='1.25rem'
			{...props}
		>
			<path d='M5 7v3l-2 1.5V5h11V3l4 3.01L14 9V7H5zm10 6v-3l2-1.5V15H6v2l-4-3.01L6 11v2h9z' />
		</svg>
	);
};

export default withEnhance(SvgRepeat);
