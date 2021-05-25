import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgChevronRight = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			height='1.25em'
			width='1.25em'
			viewBox='0 0 512.001 512.001'
			{...props}
		>
			<path d='M388.819 239.537L156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.195 23.195 0 00139.636 512a23.194 23.194 0 0016.457-6.817L388.819 272.45a23.27 23.27 0 000-32.913z' />
		</svg>
	);
};

export default withClassName(SvgChevronRight, 'chevron-right');
