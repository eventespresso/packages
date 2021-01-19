import type { CSSProperties } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { isDev } from '@eventespresso/constants';

interface DebugLogProps {
	editorState: EditorState;
}

const style: CSSProperties = { whiteSpace: 'pre-wrap' };

const Debug: React.FC<DebugLogProps> = ({ editorState }) => {
	if (!isDev || !editorState) {
		return null;
	}
	const rawContentState = convertToRaw(editorState.getCurrentContent());

	const markup = draftToHtml(rawContentState);

	return (
		<pre style={style}>
			HTML: {markup}
			Raw: {JSON.stringify(editorState.getCurrentContent(), null, 2)}
		</pre>
	);
};

export default Debug;
