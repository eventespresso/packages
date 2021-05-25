import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgFormatUnderline = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='2 0 20 20' fill='currentColor' aria-hidden='true' height='1.25em' width='1.25em' {...props}>
			<path d='M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z' />
		</svg>
	);
};

export default withClassName(SvgFormatUnderline, 'format-underline');
