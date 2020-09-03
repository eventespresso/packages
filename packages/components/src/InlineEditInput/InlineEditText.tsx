import React from 'react';
import classNames from 'classnames';

import { InlineEdit } from '@eventespresso/adapters';
import Preview from './Preview';
import type { TextProps } from './types';

import './style.scss';

const InlineEditText: React.FC<TextProps> = ({ className, fitText = true, tag: as, tooltip, ...props }) => {
	const inputClassName = classNames('ee-inline-edit', 'ee-inline-edit__text', className && className);
	return (
		<InlineEdit
			placeholder=''
			{...props}
			as={as}
			className={inputClassName}
			inputType='text'
			Preview={(previewProps) => <Preview {...previewProps} fitText={fitText} tooltip={tooltip} />}
		/>
	);
};

export default InlineEditText;
