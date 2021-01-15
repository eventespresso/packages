import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgClose = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' className='close_svg__css-1idynds' {...props}>
			<path
				fill='currentColor'
				d='M.439 21.44a1.5 1.5 0 002.122 2.121l9.262-9.261a.25.25 0 01.354 0l9.262 9.263a1.5 1.5 0 102.122-2.121L14.3 12.177a.25.25 0 010-.354l9.263-9.262A1.5 1.5 0 0021.439.44L12.177 9.7a.25.25 0 01-.354 0L2.561.44A1.5 1.5 0 00.439 2.561L9.7 11.823a.25.25 0 010 .354z'
			/>
		</svg>
	);
};

export default withClassName(SvgClose);
