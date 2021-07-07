import withClassName from '../withClassName';
import { IconProps } from '../types';

const Undo = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			height='1.5em'
			viewBox='0 0 20 20'
			width='1.5em'
			className='ee-svg--undo'
			{...props}
		>
			<path d='M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z' />
		</svg>
	);
};

export default withClassName(Undo, 'undo');
