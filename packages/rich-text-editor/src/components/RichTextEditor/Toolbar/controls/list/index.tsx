import { useCallback, useEffect, useState } from 'react';
import { RichUtils } from 'draft-js';
import { changeDepth, getSelectedBlock } from 'draftjs-utils';

import { ListItems, ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

const List: React.FC<ToolbarControlProps<'list'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentBlock, setCurrentBlock] = useState(editorState ? getSelectedBlock(editorState) : null);

	// update currently selected block when cursor position changes
	useEffect(() => {
		const newCurrentBlock = getSelectedBlock(editorState);

		setCurrentBlock(newCurrentBlock);
	}, [editorState]);

	const toggleBlockType = useCallback(
		(blockType) => {
			const newState = RichUtils.toggleBlockType(editorState, blockType);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const adjustDepth = useCallback(
		(adjustment: number) => {
			const newState = changeDepth(editorState, adjustment, 4);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const onChange = useCallback(
		(value: ListItems) => {
			if (value === 'unordered') {
				toggleBlockType('unordered-list-item');
			} else if (value === 'ordered') {
				toggleBlockType('ordered-list-item');
			} else if (value === 'indent') {
				adjustDepth(1);
			} else {
				adjustDepth(-1);
			}
		},
		[adjustDepth, toggleBlockType]
	);

	const Component = props.config.component || defaultComponent;

	let currentValue: ListItems;
	if (currentBlock.get('type') === 'unordered-list-item') {
		currentValue = 'unordered';
	} else if (currentBlock.get('type') === 'ordered-list-item') {
		currentValue = 'ordered';
	}

	return <Component {...props} currentValue={currentValue} onChange={onChange} />;
};

export default List;
