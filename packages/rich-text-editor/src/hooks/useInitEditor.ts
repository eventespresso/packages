import { useRef } from 'react';
import { EditorState } from 'draft-js';
import { extractInlineStyle } from 'draftjs-utils';

const useInitEditor = (editorState: EditorState) => {
	// use ref instead of state to flip the switch in sync
	const initialized = useRef<boolean>();

	if (!initialized.current) {
		extractInlineStyle(editorState);
		initialized.current = true;
	}
};

export default useInitEditor;
