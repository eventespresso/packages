import React from 'react';

import { EditorOl, EditorQuote, EditorUl, IconProps } from '@eventespresso/icons';

import StyleButton from '../StyleButton';
import { BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from '../types';

const iconMapping = {
	Blockquote: EditorQuote,
	OL: EditorOl,
	UL: EditorUl,
};

const BlockStyleControls: React.FC<BlockStyleControlsProps> = (props) => {
	const { editorState } = props;
	const selection = editorState.getSelection();
	const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

	return (
		<div className='rich-text-editor-controls'>
			{BLOCK_TYPES.map(({ label, style }) => {
				const Icon: React.ComponentType<IconProps> = iconMapping[label];

				return (
					<StyleButton
						active={style === blockType}
						key={label}
						icon={<Icon noMargin size='small' />}
						label={label}
						onToggle={props.onToggle}
						style={style}
					/>
				);
			})}
		</div>
	);
};

export default BlockStyleControls;
