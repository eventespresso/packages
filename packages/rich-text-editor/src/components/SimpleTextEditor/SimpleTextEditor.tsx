import classNames from 'classnames';

import { RichTextEditor, RichTextEditorProps } from '../RichTextEditor';
import { toolbar } from './toolbar';

export const SimpleTextEditor: React.FC<RichTextEditorProps> = (props) => {
	const className = classNames('ee-simple-text-editor', props.className);

	return <RichTextEditor {...props} toolbar={toolbar} className={className} />;
};
