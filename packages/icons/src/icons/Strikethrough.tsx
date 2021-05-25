import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgStrikethrough = (props: IconProps): JSX.Element => {
	return (
		<svg viewBox='0 0 16 16' fill='currentColor' aria-hidden='true' height='.9em' width='.9em' {...props}>
			<path d='M16 8v1h-3.664c0.43 0.602 0.664 1.292 0.664 2 0 1.107-0.573 2.172-1.572 2.921-0.927 0.696-2.145 1.079-3.428 1.079s-2.501-0.383-3.428-1.079c-0.999-0.749-1.572-1.814-1.572-2.921h2c0 1.084 1.374 2 3 2s3-0.916 3-2c0-1.084-1.374-2-3-2h-8v-1h4.68c-0.037-0.026-0.073-0.052-0.108-0.079-0.999-0.749-1.572-1.814-1.572-2.921s0.573-2.172 1.572-2.921c0.927-0.696 2.145-1.079 3.428-1.079s2.501 0.383 3.428 1.079c0.999 0.749 1.572 1.814 1.572 2.921h-2c0-1.084-1.374-2-3-2s-3 0.916-3 2c0 1.084 1.374 2 3 2 1.234 0 2.407 0.354 3.32 1h4.68z' />
		</svg>
	);
};

export default withClassName(SvgStrikethrough, 'strikethrough');
