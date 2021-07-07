import withClassName from '../withClassName';
import { IconProps } from '../types';

const Sort = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			height='1.5em'
			viewBox='0 0 20 20'
			width='1.5em'
			className='ee-svg--sort'
			{...props}
		>
			<path d='M11 7H1l5 7zm-2 7h10l-5-7z' />
		</svg>
	);
};

export default withClassName(Sort, 'sort');
