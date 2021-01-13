import { AdvancedTextEditor as ATE, RichTextEditorProps } from '@eventespresso/rich-text-editor';
import { withDebounce } from '@eventespresso/ui-components';

const AdvancedTextEditor: React.FC<RichTextEditorProps> = (props) => {
	return <ATE {...props} />;
};

export default withDebounce(AdvancedTextEditor, 'editorState', 'onChangeEditorState');
