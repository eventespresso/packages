import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgCopy = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			height='1.25em'
			viewBox='0 0 20 20'
			width='1.25em'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M6 15V2h10v13H6zm-1 1h8v2H3V5h2v11z' />
		</svg>
	);
};

export default withClassName(SvgCopy, 'copy');
