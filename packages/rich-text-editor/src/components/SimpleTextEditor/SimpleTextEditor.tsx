import classNames from 'classnames';

import { RTEWithEditMode } from '../RTEWithEditMode';
import { SimpleTextEditorProps } from './types';
import { toolbar } from './toolbar';

export const SimpleTextEditor: React.FC<SimpleTextEditorProps> = (props) => {
	const className = classNames('ee-simple-text-editor', props.className);

	return <RTEWithEditMode enableEditMode={false} {...props} toolbar={toolbar} className={className} />;
};
