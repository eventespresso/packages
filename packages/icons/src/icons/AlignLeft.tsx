import withClassName from '../withClassName';
import { IconProps } from '../types';

const AlignLeft = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			className='ee-svg--align-left'
			{...props}
		>
			<path d='M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z' />
		</svg>
	);
};

export default withClassName(AlignLeft, 'align-left');
