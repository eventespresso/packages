import React from 'react';
import classNames from 'classnames';

import { ButtonRowProps } from './types';

import './style.scss';

const ButtonRow: React.FC<ButtonRowProps> = ({ children, noMargin, align = 'right', topBordered, ...props }) => {
	const className = classNames(
		props.className,
		`ee-btn-row--align-${align}`,
		noMargin && 'ee-btn-row--no-marging',
		topBordered && 'ee-btn-row--top-bordered',
		'ee-btn-row'
	);

	return <div className={className}>{children}</div>;
};

export default ButtonRow;
