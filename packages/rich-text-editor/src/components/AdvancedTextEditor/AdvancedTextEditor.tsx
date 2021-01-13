import classNames from 'classnames';

import { RTEWithEditMode } from '../RTEWithEditMode';
import { AdvancedTextEditorProps } from './types';
import { toolbar } from './toolbar';

export const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	const className = classNames('ee-advanced-text-editor', props.className);

	return <RTEWithEditMode toolbar={toolbar} {...props} className={className} />;
};
