import withClassName from '../withClassName';
import { IconProps } from '../types';

const AlignRight = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			height='1.5em'
			width='1.5em'
			className='ee-svg--align-right'
			{...props}
		>
			<path d='M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z' />
		</svg>
	);
};

export default withClassName(AlignRight, 'align-right');
