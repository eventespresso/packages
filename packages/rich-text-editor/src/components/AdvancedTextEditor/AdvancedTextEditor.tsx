import React from 'react';
import classNames from 'classnames';
import { RichTextEditor } from '../RichTextEditor';
import { AdvancedTextEditorProps } from './types';

export const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	const wrapperClassName = classNames('ee-advanced-text-editor', props.wrapperClassName);

	return <RichTextEditor {...props} wrapperClassName={wrapperClassName} />;
};
