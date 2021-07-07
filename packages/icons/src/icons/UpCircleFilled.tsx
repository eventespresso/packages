import withClassName from '../withClassName';
import { IconProps } from '../types';

const UpCircleFilled = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			viewBox='64 64 896 896'
			data-icon='up-circle'
			fill='currentColor'
			height='1.5em'
			width='1.5em'
			className='ee-svg--up-circle-filled'
			{...props}
		>
			<path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm178 555h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z' />
		</svg>
	);
};

export default withClassName(UpCircleFilled, 'up-circle-filled');
