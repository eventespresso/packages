import { forwardRef } from 'react';
import classNames from 'classnames';

import { svgPath } from './svgPaths';
import type { IconProps } from '../types';

/**
 * Custom Event Espresso Dashicons
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(({ className, name, svgSize = 20, color, ...props }, ref) => {
	const path = svgPath[name];

	if (!path) {
		return null;
	}

	const newClassName = classNames(className, 'ee-icon');
	const viewBox = props.viewBox || '0 0 20 20';

	return (
		<svg
			aria-hidden={true}
			className={newClassName}
			focusable={false}
			fill={color}
			height={svgSize}
			ref={ref}
			role={'img'}
			viewBox={viewBox}
			width={svgSize}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d={path} />
		</svg>
	);
});

export default Icon;
