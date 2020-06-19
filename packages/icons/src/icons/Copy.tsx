import * as React from 'react';

function SvgCopy(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden='true'
			className='copy_svg__dashicon copy_svg__dashicons-copy copy_svg__espresso-icon'
			height={20}
			width={20}
			{...props}
		>
			<path d='M6 15V2h10v13H6zm-1 1h8v2H3V5h2v11z' />
		</svg>
	);
}

export default SvgCopy;
