import React, { useCallback } from 'react';

import { isInfinite, parseInfinity } from '@eventespresso/utils';

import InlineEdit from './InlineEdit';
import InlineEditInfinityPreview from './InlineEditInfinityPreview';
import type { TextProps } from './types';

import './style.scss';

const InlineEditInfinity: React.FC<TextProps> = ({ className, onChange, value, ...props }) => {
	const isInfinity = isInfinite(value);

	const onChangeHandler = useCallback<TextProps['onChange']>(
		(val) => {
			const parsedValue = String(parseInfinity(val));
			if (typeof onChange === 'function') {
				onChange(parsedValue);
			}
		},
		[onChange]
	);

	return (
		<InlineEdit
			placeholder=''
			{...props}
			inputClassName='ee-inline-edit__infinity'
			inputType='number'
			onChange={onChangeHandler}
			Preview={InlineEditInfinityPreview}
			previewClassName={className}
			value={isInfinity ? '' : value}
		/>
	);
};

export default InlineEditInfinity;
