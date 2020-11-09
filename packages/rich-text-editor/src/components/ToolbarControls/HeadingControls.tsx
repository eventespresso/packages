import React, { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { Select } from '../../../../components/src/Select';
import { HEADING_BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from './types';

const rootProps = {
	className: 'rich-text-editor-controls__heading',
};

const HeadingControls: React.FC<BlockStyleControlsProps> = ({ editorState, onToggle }) => {
	const selection = useMemo(() => editorState.getSelection(), [editorState]);
	const blockType = useMemo(() => editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType(), [
		editorState,
		selection,
	]);

	return (
		<Select
			aria-label={__('heading selector')}
			className='ee-input-base ee-select'
			onChangeValue={onToggle}
			options={HEADING_BLOCK_TYPES}
			rootProps={rootProps}
			value={blockType}
		/>
	);
};

export default HeadingControls;
