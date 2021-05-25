import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgDesktop = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='0 0 16 16' fill='currentColor' aria-hidden='true' height='1.25em' width='1.25em' {...props}>
			<path d='M0 1v10h16v-10h-16zM15 10h-14v-8h14v8zM10.5 12h-5l-0.5 2-1 1h8l-1-1z' />
		</svg>
	);
};

export default withClassName(SvgDesktop, 'desktop');
