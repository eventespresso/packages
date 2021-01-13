import classNames from 'classnames';

import { RichTextEditor, RichTextEditorProps } from '../RichTextEditor';
import { toolbar } from './toolbar';

export const AdvancedTextEditor: React.FC<RichTextEditorProps> = (props) => {
	const className = classNames('ee-advanced-text-editor', props.className);

	return <RichTextEditor toolbar={toolbar} {...props} className={className} />;
};
