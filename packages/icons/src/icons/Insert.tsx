import withClassName from '../withClassName';
import { IconProps } from '../types';

const Insert = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			viewBox='0 0 20 20'
			width='1.5em'
			height='1.5em'
			className='ee-svg--insert'
			{...props}
		>
			<path
				className='insert_svg__st0'
				d='M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z'
			/>
		</svg>
	);
};

export default withClassName(Insert, 'insert');
