import { AdvancedTextEditor as ATE, AdvancedTextEditorProps } from '@eventespresso/rich-text-editor';
import { withDebounce } from '@eventespresso/ui-components';

const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	return <ATE {...props} />;
};

export default withDebounce(AdvancedTextEditor);
