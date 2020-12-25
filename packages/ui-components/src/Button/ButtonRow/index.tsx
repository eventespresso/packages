import classNames from 'classnames';

import { ButtonRowProps } from './types';

import './style.scss';

const ButtonRow: React.FC<ButtonRowProps> = ({
	alignItems,
	children,
	fullWidth,
	horizontalAlign = 'right',
	justifyContent,
	noMargin,
	topBordered,
	...props
}) => {
	const className = classNames(
		'ee-btn-row',
		alignItems && `ee-btn-row--align-items-${alignItems}`,
		`ee-btn-row--horizontal-align-${horizontalAlign}`,
		justifyContent && `ee-btn-row--justify-content-${justifyContent}`,
		fullWidth && 'ee-btn-row--full-width',
		noMargin && 'ee-btn-row--no-margin',
		topBordered && 'ee-btn-row--top-bordered',
		props.className
	);

	return <div className={className}>{children}</div>;
};

export default ButtonRow;
