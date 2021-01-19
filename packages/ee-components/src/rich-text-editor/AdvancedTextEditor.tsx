import {
	AdvancedTextEditor as ATE,
	AdvancedTextEditor_experimental as ATE_Exp,
	RichTextEditorProps,
} from '@eventespresso/rich-text-editor';
import { withDebounce } from '@eventespresso/ui-components';
import { useFeature } from '@eventespresso/services';

const AdvancedTextEditor: React.FC<RichTextEditorProps> = (props) => {
	const canUseExperimentalRTE = useFeature('use_experimental_rte');

	const RTE = canUseExperimentalRTE ? ATE_Exp : ATE;

	return <RTE {...props} />;
};

export default withDebounce(AdvancedTextEditor, 'value', 'onChange');
