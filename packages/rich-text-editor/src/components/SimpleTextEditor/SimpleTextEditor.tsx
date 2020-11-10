import React from 'react';
import classNames from 'classnames';

import { RichTextEditor } from '../RichTextEditor';
import { SimpleTextEditorProps } from './types';

export const SimpleTextEditor: React.FC<SimpleTextEditorProps> = (props) => {
	const className = classNames('ee-simple-text-editor', props.className);

	return <RichTextEditor {...props} className={className} type='simple' />;
};
