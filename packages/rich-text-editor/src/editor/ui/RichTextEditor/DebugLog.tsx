import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

interface DebugLogProps {
	editorState: EditorState;
}

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const DebugLog: React.FC<DebugLogProps> = ({ editorState }) => {
	if (!isDev) {
		return null;
	}
	const rawContentState = convertToRaw(editorState.getCurrentContent());

	const markup = draftToHtml(rawContentState);

	return <pre>{markup}</pre>;
};

export default DebugLog;
