import React from 'react';

import BlockStyleControls from './BlockStyleControls';
import HeadingControls from './HeadingControls';
import InlineStyleControls from './InlineStyleControls';

import type { ToolbarControlsProps } from './types';

import './style.scss';

const ToolbarControls: React.FC<ToolbarControlsProps> = ({ editorState, onToggleBlockType, onToggleInlineStyle }) => {
	return (
		<div className='rich-text-editor-controls'>
			<HeadingControls editorState={editorState} onToggle={onToggleBlockType} />
			<BlockStyleControls editorState={editorState} onToggle={onToggleBlockType} />
			<InlineStyleControls editorState={editorState} onToggle={onToggleInlineStyle} />
		</div>
	);
};

export default ToolbarControls;
