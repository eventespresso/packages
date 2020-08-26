import React, { useCallback } from 'react';
import classNames from 'classnames';

import type { StyleButtonProps } from './types';

const StyleButton: React.FC<StyleButtonProps> = ({ active, style, onToggle, ...props }) => {
	const className = classNames(
		'rich-text-editor__styleButton',
		`rich-text-editor-controls__${style.toLowerCase()}`,
		active && 'rich-text-editor-activeButton'
	);

	const onMouseDown = useCallback(
		(e) => {
			e.preventDefault();
			onToggle(style);
		},
		[style, onToggle]
	);

	return (
		<div className={className} onMouseDown={onMouseDown} role='button' tabIndex={0}>
			{props.label}
		</div>
	);
};

export default StyleButton;
