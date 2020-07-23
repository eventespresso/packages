import React from 'react';
import classNames from 'classnames';

import { ButtonRowProps } from './types';

import './style.scss';

const ButtonRow: React.FC<ButtonRowProps> = ({ children, noMargin, rightAligned, topBordered, ...props }) => {
	const className = classNames(
		props.className,
		noMargin && 'ee-btn-row--no-marging',
		rightAligned && 'ee-btn-row--right-aligned',
		topBordered && 'ee-btn-row--top-bordered',
		'ee-btn-row'
	);

	return <div className={className}>{children}</div>;
};

export default ButtonRow;
