import withClassName from '../withClassName';
import { IconProps } from '../types';

const Clipboard = (props: IconProps): JSX.Element => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			strokeWidth='.5px'
			viewBox='0 0 14 16'
			height='1.25em'
			width='1.25em'
			xmlns='http://www.w3.org/2000/svg'
			className='ee-svg--clipboard'
			{...props}
		>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'
			/>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z'
			/>
		</svg>
	);
};

export default withClassName(Clipboard, 'clipboard');
