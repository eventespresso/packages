import { useCallback } from 'react';
import { DraftBlockType, RichUtils } from 'draft-js';
import useEditorState from './useEditorState';

type Callback = (blockType: DraftBlockType) => void;

const useToggleBlockType = (): Callback => {
	const [editorState, updateEditorState] = useEditorState();

	return useCallback<Callback>(
		(blockType) => {
			updateEditorState(RichUtils.toggleBlockType(editorState, blockType));
		},
		[editorState, updateEditorState]
	);
};

export default useToggleBlockType;
