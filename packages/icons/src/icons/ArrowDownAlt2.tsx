import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgArrowDownAlt2 = (props: IconProps): JSX.Element => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} {...props}>
			<path d='M5 6l5 5 5-5 2 1-7 7-7-7z' />
		</svg>
	);
};

export default withEnhance(SvgArrowDownAlt2);
