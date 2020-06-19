import * as React from 'react';

function SvgTableView(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden='true'
			className='tableView_svg__ee-svg'
			height='1.25rem'
			viewBox='0 0 20 20'
			width='1.25rem'
			{...props}
		>
			<path d='M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z' />
		</svg>
	);
}

export default SvgTableView;
