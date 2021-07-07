import withClassName from '../withClassName';
import { IconProps } from '../types';

const ArrowDownAlt = (props: IconProps): JSX.Element => {
	return (
		<svg
			fill='currentColor'
			aria-hidden='true'
			height='1.5em'
			width='1.5em'
			viewBox='0 0 20 20'
			className='ee-svg--arrow-down-alt'
			{...props}
		>
			<path d='M5 6l5 5 5-5 2 1-7 7-7-7z' />
		</svg>
	);
};

export default withClassName(ArrowDownAlt, 'arrow-down-alt');
