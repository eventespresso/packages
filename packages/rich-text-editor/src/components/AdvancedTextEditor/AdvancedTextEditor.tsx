import React from 'react';
import classNames from 'classnames';

import { RTEWithEditMode } from '../RTEWithEditMode';
import { AdvancedTextEditorProps } from './types';
import { toolbar } from './toolbar';
import toolbarButtons from '../toolbarButtons';

export const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	const wrapperClassName = classNames('ee-advanced-text-editor', props.wrapperClassName);

	return (
		<RTEWithEditMode
			{...props}
			wrapperClassName={wrapperClassName}
			toolbarCustomButtons={toolbarButtons}
			toolbar={toolbar}
		/>
	);
};
