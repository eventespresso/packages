import * as React from 'react';

function SvgMore(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg className='more_svg__icon' width={200} height={200} viewBox='0 0 1024 1024' {...props}>
			<path
				fill='#333'
				d='M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z'
			/>
		</svg>
	);
}

export default SvgMore;
