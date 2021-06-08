import withClassName from '../withClassName';
import { IconProps } from '../types';

const FormatItalic = (props: IconProps): JSX.Element => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			className='ee-svg--format-italic'
			{...props}
		>
			<path d='M12.5 5L10 19h1.9l2.5-14z' />
		</svg>
	);
};

export default withClassName(FormatItalic, 'format-italic');
