import React from 'react';
import classNames from 'classnames';
import type { SidebarProps } from './types';
import './styles.scss';

/**
 * A container for displaying child elements
 * before or after other elements within a Row
 */
const Sidebar: React.FC<SidebarProps> = ({ align = 'top', before = false, children, ...props }) => {
	const className = classNames(
		props.className,
		'ee-container__sidebar',
		align && `ee-container--align-${align}`,
		before && 'ee-container__sidebar--before',
		!before && 'ee-container__sidebar--after'
	);

	return (
		<div {...props} className={className}>
			{children}
		</div>
	);
};

export default Sidebar;
