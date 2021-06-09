import withClassName from '../withClassName';
import { IconProps } from '../types';

const VenueSeat = (props: IconProps): JSX.Element => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			strokeWidth='0'
			viewBox='0 0 24 24'
			height='1.25em'
			width='1.25em'
			className='ee-svg--venue-seat'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z'></path>
		</svg>
	);
};

export default withClassName(VenueSeat, 'venue-seat');
