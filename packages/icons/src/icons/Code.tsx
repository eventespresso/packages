import withClassName from '../withClassName';
import { IconProps } from '../types';

const Code = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 20 16'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			className='ee-svg--code'
			{...props}
		>
			<path d='M13 11.5l1.5 1.5 5-5-5-5L13 4.5 16.5 8zM7 4.5L5.5 3l-5 5 5 5L7 11.5 3.5 8zM10.958 2.352l1.085.296-3 11-1.085-.296 3-11z' />
		</svg>
	);
};

export default withClassName(Code, 'code');
