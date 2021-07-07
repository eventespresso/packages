import withClassName from '../withClassName';
import { IconProps } from '../types';

const Copy = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			height='1.5em'
			viewBox='0 0 20 20'
			width='1.5em'
			xmlns='http://www.w3.org/2000/svg'
			className='ee-svg--copy'
			{...props}
		>
			<path d='M6 15V2h10v13H6zm-1 1h8v2H3V5h2v11z' />
		</svg>
	);
};

export default withClassName(Copy, 'copy');
