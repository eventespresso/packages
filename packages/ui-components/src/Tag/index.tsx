import classNames from 'classnames';

import { Tooltip } from '../';
import type { TagProps } from './types';

import './style.scss';

export const Tag: React.FC<TagProps> = ({ children, color, colorContrast, icon, tooltip, ...props }) => {
	const className = classNames(
		'ee-tag',
		color && `ee-tag--${color}`,
		color && colorContrast && `ee-tag--${color}-contrast-${colorContrast}`,
		props.className
	);

	return (
		<Tooltip aria-label={tooltip} tooltip={tooltip}>
			<div className={className}>
				{icon && icon}
				{children}
			</div>
		</Tooltip>
	);
};
