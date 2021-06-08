import withClassName from '../withClassName';
import { IconProps } from '../types';

const Desktop = (props: IconProps): JSX.Element => {
	return (
		<svg
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			viewBox='0 0 16 16'
			className='ee-svg--desktop'
			{...props}
		>
			<path d='M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z' />
		</svg>
	);
};

export default withClassName(Desktop, 'desktop');
