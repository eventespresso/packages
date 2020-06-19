import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={20} height={20} {...props}>
			<path d='M3 4.5v-2s3.34-1 7-1 7 1 7 1v2l-5 7.03v6.97s-1.22-.09-2.25-.59S8 16.5 8 16.5v-4.97z' />
		</svg>
	);
}

export default SvgFilter;
