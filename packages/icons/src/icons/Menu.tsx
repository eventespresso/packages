import withClassName from '../withClassName';
import { IconProps } from '../types';

const Menu = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			height='1.25em'
			viewBox='0 0 20 20'
			width='1.25em'
			xmlns='http://www.w3.org/2000/svg'
			className='ee-svg--menu'
			{...props}
		>
			<path d='M17 7V5H3v2h14zm0 4V9H3v2h14zm0 4v-2H3v2h14z' />
		</svg>
	);
};

export default withClassName(Menu, 'menu');
