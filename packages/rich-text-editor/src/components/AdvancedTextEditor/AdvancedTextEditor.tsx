import React from 'react';
import classNames from 'classnames';
import { RichTextEditor } from '../RichTextEditor';
import { AdvancedTextEditorProps } from './types';
import { toolbar } from './toolbar';
import toolbarButtons from '../toolbarButtons';

export const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	const wrapperClassName = classNames('ee-advanced-text-editor', props.wrapperClassName);

	return (
		<RichTextEditor
			{...props}
			wrapperClassName={wrapperClassName}
			toolbarCustomButtons={toolbarButtons}
			toolbar={toolbar}
		/>
	);
};
