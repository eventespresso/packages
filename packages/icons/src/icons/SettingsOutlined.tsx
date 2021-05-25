import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgSettingsOutlined = (props: IconProps): JSX.Element => {
	return (
		<svg
			color='currentColor'
			fill='none'
			aria-hidden='true'
			height='1.25em'
			width='1.25em'
			viewBox='0 0 24 24'
			{...props}
		>
			<g fill='none' stroke='currentColor' strokeWidth={2}>
				<path
					className='ee-outlined'
					d='M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z'
				/>
			</g>
		</svg>
	);
};

export default withClassName(SvgSettingsOutlined, 'settings');
