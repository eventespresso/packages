import React from 'react';
import classNames from 'classnames';

import { RichTextEditor } from '../RichTextEditor';
import { SimpleTextEditorProps } from './types';
import { toolbar } from './toolbar';

export const SimpleTextEditor: React.FC<SimpleTextEditorProps> = (props) => {
	const className = classNames('ee-simple-text-editor', props.className);

	return <RichTextEditor {...props} className={className} toolbar={toolbar} />;
};
