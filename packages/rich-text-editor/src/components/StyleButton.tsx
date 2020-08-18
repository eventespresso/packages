import React from 'react';
import classNames from 'classnames';

import type { StyleButtonProps } from './types';

const StyleButton: React.FC<StyleButtonProps> = ({ active, style, ...props }) => {
	const className = classNames('RichEditor-styleButton', active && 'RichEditor-activeButton');

	const onToggle = (e) => {
		e.preventDefault();
		props.onToggle(style);
	};

	return (
		<span className={className} onMouseDown={onToggle} role='button' tabIndex={0}>
			{props.label}
		</span>
	);
};

export default StyleButton;
