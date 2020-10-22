import React, { useCallback } from 'react';

import { isInfinite, parseInfinity } from '@eventespresso/utils';
import { InlineEdit } from '@eventespresso/adapters';

import InlineEditInfinityPreview from './InlineEditInfinityPreview';
import type { TextProps } from './types';

import './style.scss';

const InlineEditInfinity: React.FC<TextProps> = ({ className, onChangeValue, value, ...props }) => {
	const isInfinity = isInfinite(value);

	const onChangeHandler = useCallback<TextProps['onChangeValue']>(
		(val) => {
			const parsedValue = parseInfinity(val);
			if (typeof onChangeValue === 'function') {
				onChangeValue(parsedValue);
			}
		},
		[onChangeValue]
	);

	return (
		<InlineEdit
			placeholder=''
			{...props}
			inputClassName={'ee-inline-edit__infinity'}
			inputType='number'
			onChangeValue={onChangeHandler}
			Preview={InlineEditInfinityPreview}
			previewClassName={className}
			value={isInfinity ? '' : value}
		/>
	);
};

export default InlineEditInfinity;
