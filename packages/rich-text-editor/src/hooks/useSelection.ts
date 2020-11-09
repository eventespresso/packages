import { EditorState } from 'draft-js';

import useEditorState from './useEditorState';

const useSelection = (): ReturnType<EditorState['getSelection']> => {
	const [editorState] = useEditorState();

	return editorState.getSelection();
};

export default useSelection;
