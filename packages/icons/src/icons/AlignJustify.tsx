import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgAlignJustify = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' height='1.25em' width='1.25em' {...props}>
			<path d='M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z' />
		</svg>
	);
};

export default withClassName(SvgAlignJustify, 'align-justify');
