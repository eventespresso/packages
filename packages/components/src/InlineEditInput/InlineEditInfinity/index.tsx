import React, { useCallback } from 'react';

import { isInfinite, parseInfinity } from '@eventespresso/utils';
import { InlineEdit } from '@eventespresso/adapters';

import Preview from './Preview';
import type { TextProps } from '../types';

const InlineEditInfinity: React.FC<TextProps> = ({ onChangeValue, value, ...props }) => {
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
			{...props}
			inputType='number'
			onChangeValue={onChangeHandler}
			Preview={Preview}
			value={isInfinity ? '' : value}
		/>
	);
};

export default InlineEditInfinity;
