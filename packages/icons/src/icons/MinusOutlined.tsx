import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgMinusOutlined = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='64 64 896 896'
			data-icon='minus'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			className='ee-svg--minus-outlined'
			{...props}
		>
			<path d='M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z' />
		</svg>
	);
};

export default withClassName(SvgMinusOutlined);
