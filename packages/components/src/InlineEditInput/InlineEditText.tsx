import React, { useCallback } from 'react';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { TextProps } from './types';

import './style.scss';

const InlineEditText: React.FC<TextProps> = ({ 'aria-describedby': ariaDescribedby, className, tag: as, ...props }) => {
	const preview = useCallback((previewProps) => <Preview {...previewProps} aria-describedby={ariaDescribedby} />, [
		ariaDescribedby,
	]);

	return (
		<InlineEdit
			placeholder=''
			{...props}
			as={as}
			inputClassName={'ee-inline-edit__text'}
			inputType='text'
			Preview={preview}
			previewClassName={className}
		/>
	);
};

export default InlineEditText;
