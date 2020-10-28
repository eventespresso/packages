import React from 'react';
import classNames from 'classnames';

import { Tooltip } from '../../';
import type { LinkProps } from '../types';

import '../style.scss';
import './style.scss';

export const Link: React.FC<LinkProps> = ({
	children,
	href,
	icon,
	target = '_blank',
	tooltip,
	tooltipProps,
	...props
}) => {
	const className = classNames(
		props.className,
		'ee-btn-base',
		'ee-icon-button',
		'ee-link',
		!icon && 'ee-link--no-icon'
	);

	const label = tooltip && tooltip;

	const link = (
		<a aria-label={label} className={className} href={href} rel='noopener noreferrer' target={target}>
			{icon ? icon : children}
		</a>
	);

	if (tooltip) {
		return (
			<Tooltip tooltip={tooltip} {...tooltipProps}>
				{link}
			</Tooltip>
		);
	}

	return link;
};
