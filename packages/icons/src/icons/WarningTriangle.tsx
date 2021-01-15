import withClassName from '../withClassName';
import { IconProps } from '../types';

const SvgWarningTriangle = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			className='warningTriangle_svg__ee-svg'
			fill='currentColor'
			viewBox='0 0 24 24'
			height='1.25em'
			width='1.25em'
			{...props}
		>
			<path d='M23.119 20L13.772 2.15a2 2 0 00-3.543 0L.881 20a2 2 0 001.772 2.928h18.694A2 2 0 0023.119 20zM11 8.423a1 1 0 012 0v6a1 1 0 11-2 0zm1.05 11.51h-.028a1.528 1.528 0 01-1.522-1.47 1.476 1.476 0 011.448-1.53h.028A1.527 1.527 0 0113.5 18.4a1.475 1.475 0 01-1.45 1.533z' />
		</svg>
	);
};

export default withClassName(SvgWarningTriangle);
