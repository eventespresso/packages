import React from 'react';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { TextAreaProps } from './types';

import './style.scss';

const InlineEditTextArea: React.FC<TextAreaProps> = ({ className, lineCount = 3, ...props }) => {
	return (
		<InlineEdit
			placeholder=''
			{...props}
			inputClassName={'ee-inline-edit__textarea'}
			lineCount={lineCount}
			inputType='textarea'
			Preview={Preview}
			previewClassName={className}
		/>
	);
};

export default InlineEditTextArea;
