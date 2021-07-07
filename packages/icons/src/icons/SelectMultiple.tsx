import withClassName from '../withClassName';
import { IconProps } from '../types';

const SelectMultiple = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			height='1.5em'
			width='1.5em'
			viewBox='0 0 24 24'
			className='ee-svg--select-multiple'
			{...props}
		>
			<path d='M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z' />
			<path d='M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519l-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z' />
		</svg>
	);
};

export default withClassName(SelectMultiple, 'select-multiple');
