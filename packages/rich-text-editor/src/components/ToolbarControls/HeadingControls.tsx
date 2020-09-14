import React from 'react';

import { useMemoStringify } from '@eventespresso/hooks';
import { SelectInput } from '../../../../components';
import { HEADING_BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from '../types';

const HeadingControls: React.FC<BlockStyleControlsProps> = ({ editorState, onToggle }) => {
	const selection = editorState.getSelection();
	const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
	const rootProps = useMemoStringify({ className: 'rich-text-editor-controls__heading' });

	return (
		<SelectInput options={HEADING_BLOCK_TYPES} onChangeValue={onToggle} rootProps={rootProps} value={blockType} />
	);
};

export default HeadingControls;
