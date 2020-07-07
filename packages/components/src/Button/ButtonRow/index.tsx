import React from 'react';
import classNames from 'classnames';

import './style.scss';

interface ButtonGroup {
	className?: string;
	noMargin?: boolean;
	rightAligned?: boolean;
}

const ButtonRow: React.FC<ButtonGroup> = ({ children, noMargin, rightAligned, ...props }) => {
	const className = classNames(
		props.className,
		noMargin && 'ee-btn-row--no-marging',
		rightAligned && 'ee-btn-row--right-aligned',
		'ee-btn-row'
	);

	return <div className={className}>{children}</div>;
};

export default ButtonRow;
