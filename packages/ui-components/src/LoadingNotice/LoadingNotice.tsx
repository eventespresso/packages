import React from 'react';
import classNames from 'classnames';
import { Spinner } from '@eventespresso/adapters';
import { __ } from '@eventespresso/i18n';

import type { LoadingNoticeProps } from './types';
import './style.scss';

export const LoadingNotice: React.FC<LoadingNoticeProps> = ({ children, size = 'big', ...props }) => {
	const className = classNames('ee-loading-notice', size && `ee-loading-notice--${size}`, props.className);

	const label = props.label || __('loading…');

	return (
		<div className={className}>
			<Spinner {...props} label={label}>
				{children}
			</Spinner>
		</div>
	);
};
