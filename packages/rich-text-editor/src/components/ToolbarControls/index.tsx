import React from 'react';
import classNames from 'classnames';

import BlockStyleControls from './BlockStyleControls';
import HeadingControls from './HeadingControls';
import InlineStyleControls from './InlineStyleControls';

import type { ToolbarControlsProps } from './types';

import './style.scss';

const ToolbarControls: React.FC<ToolbarControlsProps> = ({
	editorState,
	onToggleBlockType,
	onToggleInlineStyle,
	type = 'simple',
}) => {
	const className = classNames('rich-text-editor-controls__wrapper', type);
	return (
		<div className={className}>
			<HeadingControls editorState={editorState} onToggle={onToggleBlockType} />
			<BlockStyleControls editorState={editorState} onToggle={onToggleBlockType} />
			<InlineStyleControls editorState={editorState} onToggle={onToggleInlineStyle} />
			{type === 'advanced' && <>{/* something cool here */}</>}
		</div>
	);
};

export default ToolbarControls;
