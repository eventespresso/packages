import withClassName from '../withClassName';
import { IconProps } from '../types';

const Filter = (props: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5em'
			height='1.5em'
			viewBox='0 0 20 20'
			className='ee-svg--filter'
			{...props}
		>
			<path d='M3 4.5v-2s3.34-1 7-1 7 1 7 1v2l-5 7.03v6.97s-1.22-.09-2.25-.59S8 16.5 8 16.5v-4.97z' />
		</svg>
	);
};

export default withClassName(Filter, 'filter');
