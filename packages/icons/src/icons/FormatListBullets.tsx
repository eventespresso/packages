import withClassName from '../withClassName';
import { IconProps } from '../types';

const FormatListBullets = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			className='ee-svg--format-list-bullets'
			{...props}
		>
			<path d='M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
		</svg>
	);
};

export default withClassName(FormatListBullets, 'format-list-bullets');
