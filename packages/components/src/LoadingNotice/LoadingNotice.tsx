import React from 'react';
import classNames from 'classnames';
import { Spinner } from '@eventespresso/adapters';
import { __ } from '@eventespresso/i18n';

import type { LoadingNoticeProps } from './types';
import './style.scss';

const LoadingNotice: React.FC<LoadingNoticeProps> = ({ children, size = 'lg', ...props }) => {
	const className = classNames({
		[props.className]: props.className !== undefined,
		'ee-loading-notice': true,
		[`ee-loading-notice--${size}`]: size !== undefined,
	});

	const label = props.label || __('loading…');

	return (
		<div className={className}>
			<Spinner {...props} size={size} label={label}>
				{children}
			</Spinner>
		</div>
	);
};

export default LoadingNotice;
