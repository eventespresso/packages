import React from 'react';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { TextProps } from './types';

import './style.scss';

export const InlineEditText: React.FC<TextProps> = ({ className, tag: as, ...props }) => {
	return (
		<InlineEdit
			placeholder=''
			{...props}
			as={as}
			inputClassName='ee-inline-edit__text'
			inputType='text'
			Preview={Preview}
			previewClassName={className}
		/>
	);
};
