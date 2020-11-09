import React, { useCallback } from 'react';
import { EditorState, convertToRaw } from 'draft-js';

interface DebugLogProps {
	editorState: EditorState;
}

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

/**
 * This component renders a button only in dev env
 * to console log the current state in raw shape
 */
const DebugLog: React.FC<DebugLogProps> = ({ editorState }) => {
	const content = editorState.getCurrentContent();

	const logState = useCallback(() => console.log(convertToRaw(content)), [content]);

	if (!isDev) {
		return null;
	}

	return (
		<button type='button' onClick={logState}>
			Log State
		</button>
	);
};

export default DebugLog;
