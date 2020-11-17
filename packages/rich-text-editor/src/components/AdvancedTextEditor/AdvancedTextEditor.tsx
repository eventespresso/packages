import React from 'react';
import classNames from 'classnames';
import { RichTextEditor } from '../RichTextEditor';
import { AdvancedTextEditorProps } from './types';

export const AdvancedTextEditor: React.FC<AdvancedTextEditorProps> = (props) => {
	const className = classNames('ee-advanced-text-editor', props.className);

	return <RichTextEditor {...props} className={className} />;
};
