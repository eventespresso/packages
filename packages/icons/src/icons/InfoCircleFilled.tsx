import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgInfoCircleFilled = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 1024 1024'
			aria-hidden='true'
			className='info-circle-filled_svg__ee-svg'
			fill='currentColor'
			height='1.25em'
			width='1.25em'
			{...props}
		>
			<path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z' />
		</svg>
	);
};

export default withEnhance(SvgInfoCircleFilled);
