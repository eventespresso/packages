import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgCalculator = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			className='calculator_svg__css-thzv76 calculator_svg__dashicon calculator_svg__dashicons-calculator calculator_svg__espresso-icon'
			height={20}
			width={20}
			{...props}
		>
			<path d='M3 0v20h14V0H3zm2.5 2.5h9v2h-9v-2zm0 4h2v1.75h-2V6.5zm3.5 0h2v1.75H9V6.5zm3.5 0h2v1.75h-2V6.5zm-7 3h2v1.75h-2V9.5zm3.5 0h2v1.75H9V9.5zm3.5 0h2v1.75h-2V9.5zm-7 3h2v1.75h-2V12.5zm3.5 0h2v1.75H9V12.5zm3.5 0h2v1.75h-2V12.5zm-7 3h2v1.75h-2V15.5zm3.5 0h2v1.75H9V15.5zm3.5 0h2v1.75h-2V15.5z' />
		</svg>
	);
};

export default withEnhance(SvgCalculator);
