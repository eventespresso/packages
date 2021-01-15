import classNames from 'classnames';

import { RTEWithEditMode } from '../RTEWithEditMode';
import { SimpleTextEditorProps } from './types';
import { toolbar } from './toolbar';

export const SimpleTextEditor: React.FC<SimpleTextEditorProps> = (props) => {
	const wrapperClassName = classNames('ee-simple-text-editor', props.wrapperClassName);

	return <RTEWithEditMode enableEditMode={false} {...props} toolbar={toolbar} wrapperClassName={wrapperClassName} />;
};
