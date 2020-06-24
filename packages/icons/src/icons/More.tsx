import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgMore = (props: IconProps): JSX.Element => {
	return (
		<svg aria-hidden='true' className='more_svg__ee-svg' height={20} width={20} {...props}>
			<path d='M17 7V5H3v2h14zm0 4V9H3v2h14zm0 4v-2H3v2h14z' />
		</svg>
	);
};

export default withEnhance(SvgMore);
