import React, { useCallback } from 'react';

import InlineEdit from './InlineEdit';
import Preview from './Preview';
import type { TextareaProps } from './types';

import './style.scss';

export const InlineEditTextarea: React.FC<TextareaProps> = ({ className, lineCount = 3, ...props }) => {
	const preview = useCallback((previewProps) => <Preview {...previewProps} lineCount={lineCount} />, [lineCount]);

	return (
		<InlineEdit
			placeholder=''
			{...props}
			inputClassName='ee-inline-edit__textarea'
			lineCount={lineCount}
			inputType='textarea'
			Preview={preview}
			previewClassName={className}
			textAreaClassName='ee-input-base ee-textarea'
		/>
	);
};
