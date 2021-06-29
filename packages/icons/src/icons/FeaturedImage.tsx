import withClassName from '../withClassName';
import { IconProps } from '../types';

const FeaturedImage = (props: IconProps): JSX.Element => {
	return (
		<svg
			color='currentColor'
			fill='none'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			viewBox='3 3 18 18'
			className='ee-svg--featured-image'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeWidth='0'
				d='M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z'
			/>
		</svg>
	);
};

export default withClassName(FeaturedImage, 'featured-image');
