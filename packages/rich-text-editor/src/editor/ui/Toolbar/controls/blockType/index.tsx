import { useCallback, useEffect, useState } from 'react';
import { RichUtils } from 'draft-js';
import { getSelectedBlocksType } from 'draftjs-utils';

import { BlockTypeItems, ToolbarControlProps } from '../../../types';
import { useEditorState } from '../../../../hooks';
import defaultComponent from './Component';

const blocksTypes = [
	{ label: 'Normal', style: 'unstyled' },
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'Code', style: 'code' },
];

const BlockType: React.FC<ToolbarControlProps<'blockType'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentBlockType, setCurrentBlockType] = useState(
		editorState ? getSelectedBlocksType(editorState) : 'unstyled'
	);

	// update currently selected block type when cursor position changes
	useEffect(() => {
		const newCurrentBlockType = getSelectedBlocksType(editorState);

		setCurrentBlockType(newCurrentBlockType);
	}, [editorState]);

	const toggleBlockType = useCallback(
		(blockType: BlockTypeItems) => {
			const blockTypeValue = blocksTypes.find((bt) => bt.label === blockType).style;
			const newState = RichUtils.toggleBlockType(editorState, blockTypeValue);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const Component = props.config.component || defaultComponent;
	const currentValue = blocksTypes.find((bt) => bt.style === currentBlockType)?.label;

	return <Component {...props} currentValue={currentValue} onChange={toggleBlockType} />;
};

export default BlockType;
