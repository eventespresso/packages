import React from 'react';

import InlineEdit from './InlineEdit';
import Preview from './Preview';
import type { TextAreaProps } from './types';

import './style.scss';

const InlineEditTextArea: React.FC<TextAreaProps> = ({ className, lineCount = 3, ...props }) => {
	return (
		<InlineEdit
			placeholder=''
			{...props}
			inputClassName='ee-inline-edit__textarea'
			lineCount={lineCount}
			inputType='textarea'
			Preview={Preview}
			previewClassName={className}
			textAreaClassName='ee-input-base ee-textarea'
		/>
	);
};

export default InlineEditTextArea;
