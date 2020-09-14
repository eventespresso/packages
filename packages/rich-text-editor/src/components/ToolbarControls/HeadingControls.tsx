import React, { useMemo } from 'react';

import { Select } from '@eventespresso/adapters';
import { useMemoStringify } from '@eventespresso/hooks';
import { HEADING_BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from '../types';

const HeadingControls: React.FC<BlockStyleControlsProps> = ({ editorState, onToggle }) => {
	const selection = useMemo(() => editorState.getSelection(), [editorState]);
	const blockType = useMemo(() => editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType(), [
		editorState,
		selection,
	]);
	const rootProps = useMemoStringify({ className: 'rich-text-editor-controls__heading' });

	return (
		<Select
			className='ee-input-base ee-select'
			options={HEADING_BLOCK_TYPES}
			onChangeValue={onToggle}
			rootProps={rootProps}
			value={blockType}
		/>
	);
};

export default HeadingControls;
