import React, { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import Select from '../../../../adapters/src/Select/Select';
import { HEADING_BLOCK_TYPES } from '../constants';
import type { BlockStyleControlsProps } from '../types';

const HeadingControls: React.FC<BlockStyleControlsProps> = ({ editorState, onToggle }) => {
	const selection = useMemo(() => editorState.getSelection(), [editorState]);
	const blockType = useMemo(() => editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType(), [
		editorState,
		selection,
	]);
	const rootProps = useMemo(
		() => ({
			className: 'rich-text-editor-controls__heading',
		}),
		[]
	);

	return (
		<Select
			aria-label={__('heading selector')}
			className='ee-input-base ee-select'
			options={HEADING_BLOCK_TYPES}
			onChangeValue={onToggle}
			rootProps={rootProps}
			value={blockType}
		/>
	);
};

export default HeadingControls;
