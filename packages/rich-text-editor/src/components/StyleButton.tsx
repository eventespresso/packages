import React, { useCallback } from 'react';
import classNames from 'classnames';

import type { StyleButtonProps } from './types';

const StyleButton: React.FC<StyleButtonProps> = ({ active, style, onToggle, ...props }) => {
	const className = classNames('RichEditor-styleButton', active && 'RichEditor-activeButton');

	const onMouseDown = useCallback(
		(e) => {
			e.preventDefault();
			onToggle(style);
		},
		[style, onToggle]
	);

	return (
		<span className={className} onMouseDown={onMouseDown} role='button' tabIndex={0}>
			{props.label}
		</span>
	);
};

export default StyleButton;
