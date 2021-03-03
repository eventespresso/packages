import { forwardRef } from 'react';
import classNames from 'classnames';

import { withTooltip } from '../../withTooltip';
import type { LinkProps } from '../types';

import '../style.scss';
import './style.scss';

const PlainLink = forwardRef<HTMLAnchorElement, LinkProps>(
	({ children, href, icon, target = '_blank', ...props }, ref) => {
		const className = classNames(
			props.className,
			'ee-btn-base',
			'ee-icon-button',
			'ee-link',
			!icon && 'ee-link--no-icon'
		);

		return (
			<a
				aria-label={props['aria-label']}
				className={className}
				href={href}
				rel='noopener noreferrer'
				target={target}
				ref={ref}
			>
				{icon ? icon : children}
			</a>
		);
	}
);

export const Link = withTooltip(PlainLink);
