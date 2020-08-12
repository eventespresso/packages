import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgCopy = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			className='copy_svg__dashicon copy_svg__dashicons-copy copy_svg__espresso-icon'
			height={'1.25em'}
			viewBox={'0 0 20 20'}
			width={'1.25em'}
			{...props}
		>
			<path d='M6 15V2h10v13H6zm-1 1h8v2H3V5h2v11z' />
		</svg>
	);
};

export default withEnhance(SvgCopy);
