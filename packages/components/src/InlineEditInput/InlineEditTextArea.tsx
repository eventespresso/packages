import React from 'react';
import classNames from 'classnames';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { TextAreaProps } from './types';

import './style.scss';

const InlineEditTextArea: React.FC<TextAreaProps> = ({ className, lineCount = 3, ...props }) => {
	const inputClassName = classNames('ee-inline-edit', 'ee-inline-edit__textarea', className && className);
	return (
		<InlineEdit
			placeholder=''
			{...props}
			className={inputClassName}
			lineCount={lineCount}
			inputType='textarea'
			Preview={Preview}
		/>
	);
};

export default InlineEditTextArea;
