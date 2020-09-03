import React from 'react';
import classNames from 'classnames';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { PreviewProps, TextAreaProps } from './types';

import './style.scss';

const InlineEditTextArea: React.FC<TextAreaProps> = ({ className, tooltip, ...props }) => {
	const inputClassName = classNames('ee-inline-edit', 'ee-inline-edit__textarea', className && className);
	return (
		<InlineEdit
			placeholder=''
			{...props}
			className={inputClassName}
			inputType='textarea'
			Preview={(previewProps: PreviewProps) => <Preview {...previewProps} lineCount={3} tooltip={tooltip} />}
		/>
	);
};

export default InlineEditTextArea;
