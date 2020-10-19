import React from 'react';
import classNames from 'classnames';

import { Banner as BannerAdapter } from '@eventespresso/adapters';
import type { BannerProps } from '@eventespresso/adapters';

import './style.scss';

export const Banner: React.FC<BannerProps> = ({
	children,
	description,
	iconProps,
	status,
	title,
	variant,
	...props
}) => {
	const className = classNames('ee-banner', status && `ee-banner--${status}`, props.className);

	return (
		<BannerAdapter
			className={className}
			description={description}
			iconProps={iconProps}
			title={title}
			variant={variant}
		>
			{children}
		</BannerAdapter>
	);
};
