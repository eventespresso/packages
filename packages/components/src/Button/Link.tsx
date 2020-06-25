import React from 'react';
import classNames from 'classnames';

import { Tooltip } from '@eventespresso/adapters';
import type { LinkProps } from './types';
import './style.scss';

const Link: React.FC<LinkProps> = ({ external, href, icon, tooltip, tooltipProps, ...props }) => {
	const className = classNames('ee-btn-base ee-icon-button ee-icon-button--borderless', props.className);

	if (external && icon) {
		return (
			<Tooltip tooltip={tooltip} {...tooltipProps}>
				<a href={href} className={className} target={'_blank'} rel={'noopener noreferrer'}>
					{icon}
				</a>
			</Tooltip>
		);
	}

	// this might be extended later when we'll use react-router
	return null;
};

export default Link;
