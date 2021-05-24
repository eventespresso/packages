import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgCode = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 20 16'
			className='code_svg__ee-svg'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			{...props}
		>
			<path d='M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z' />
			<path d='M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z' />
			<path d='M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z' />
		</svg>
	);
};

export default withClassName(SvgCode);
