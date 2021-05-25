import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgAlignCenter = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' height='1.25em' width='1.25em' {...props}>
			<path d='M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z' />
		</svg>
	);
};

export default withClassName(SvgAlignCenter, 'align-center');
