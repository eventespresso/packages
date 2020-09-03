import React, { useCallback } from 'react';
import classNames from 'classnames';

import { isInfinite, parseInfinity } from '@eventespresso/utils';
import { InlineEdit } from '@eventespresso/adapters';

import Preview from './Preview';
import type { TextProps } from './types';

import './style.scss';

const InlineEditInfinity: React.FC<TextProps> = ({ className, onChangeValue, value, ...props }) => {
	const isInfinity = isInfinite(value);
	const inputClassName = classNames('ee-inline-edit', 'ee-inline-edit__infinity', className && className);
	const previewClassName = isInfinity ? 'ee-infinity-sign__inner' : '';
	const previewText = isInfinity ? '∞' : value;

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
			className={inputClassName}
			inputType='number'
			onChangeValue={onChangeHandler}
			Preview={(previewProps) => <Preview {...previewProps} value={previewText} className={previewClassName} />}
			value={isInfinity ? '' : value}
		/>
	);
};

export default InlineEditInfinity;
