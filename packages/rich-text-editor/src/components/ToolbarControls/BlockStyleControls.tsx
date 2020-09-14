import React from 'react';

import StyleButton from '../StyleButton';
import { BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from '../types';

const BlockStyleControls: React.FC<BlockStyleControlsProps> = (props) => {
	const { editorState } = props;
	const selection = editorState.getSelection();
	const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

	return (
		<div>
			{BLOCK_TYPES.map((type) => (
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			))}
		</div>
	);
};

export default BlockStyleControls;
