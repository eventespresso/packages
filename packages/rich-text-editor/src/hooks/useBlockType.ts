import { useMemo } from 'react';

import useEditorState from './useEditorState';

const useBlockType = (): string => {
	const [editorState] = useEditorState();
	const selection = editorState.getSelection();

	const blockType = useMemo(() => {
		return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
	}, [editorState, selection]);

	return blockType;
};

export default useBlockType;
