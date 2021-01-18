import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgAlignRight = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 24 24'
			className='alignRight_svg__ee-svg'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			{...props}
		>
			<path d='M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z' />
		</svg>
	);
};

export default withClassName(SvgAlignRight);