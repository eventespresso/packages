import React, { useCallback } from 'react';
import classNames from 'classnames';

import type { StyleButtonProps } from './types';

const StyleButton: React.FC<StyleButtonProps> = ({ active, icon, label, onToggle, style, ...props }) => {
	const className = classNames(
		'ee-rich-text-editor__style-button',
		`ee-rich-text-editor-controls__${style?.toLowerCase()}`,
		active && 'ee-rich-text-editor__style-button--active'
	);

	const onMouseDown = useCallback(
		(e) => {
			e.preventDefault();
			onToggle(style);
		},
		[style, onToggle]
	);

	return (
		<div
			aria-label={props['aria-label'] || label}
			className={className}
			onMouseDown={onMouseDown}
			role='button'
			tabIndex={0}
		>
			{icon ? icon : label}
		</div>
	);
};

export default StyleButton;
