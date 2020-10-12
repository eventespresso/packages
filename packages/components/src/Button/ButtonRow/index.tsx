import React from 'react';
import classNames from 'classnames';

import { ButtonRowProps } from './types';

import './style.scss';

const ButtonRow: React.FC<ButtonRowProps> = ({
	align = 'right',
	children,
	fullWidth,
	noMargin,
	topBordered,
	...props
}) => {
	const className = classNames(
		props.className,
		`ee-btn-row--align-${align}`,
		fullWidth && 'ee-btn-row--full-width',
		noMargin && 'ee-btn-row--no-margin',
		topBordered && 'ee-btn-row--top-bordered',
		'ee-btn-row'
	);

	return <div className={className}>{children}</div>;
};

export default ButtonRow;
