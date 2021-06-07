import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgMore = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			height='1.25em'
			viewBox='1 0 20 20'
			width='1.25em'
			xmlns='http://www.w3.org/2000/svg'
			className='ee-svg--more'
			{...props}
		>
			<path d='M11 13h2v-2h-2v2zm-6 0h2v-2H5v2zm12-2v2h2v-2h-2z' />
		</svg>
	);
};

export default withClassName(SvgMore);
