import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgSwitchUnchecked = (props: IconProps): JSX.Element => {
	return (
		<svg aria-hidden='true' fill='currentColor' height={10} width={10} {...props}>
			<path
				d='M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12'
				fill='#fff'
			/>
		</svg>
	);
};

export default withEnhance(SvgSwitchUnchecked);
