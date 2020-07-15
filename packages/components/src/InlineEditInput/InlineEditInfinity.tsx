import React, { useCallback } from 'react';
import classNames from 'classnames';

import { isInfinite, parseInfinity } from '@eventespresso/services';
import { InlineEdit, InlineEditPreviewProps } from '@eventespresso/adapters';
import type { TextProps } from './types';

const Preview: React.FC<InlineEditPreviewProps> = ({ value, onRequestEdit, isEditing }) => {
	const isInfinity = isInfinite(value);
	const classeName = classNames({
		'ee-infinity-sign': isInfinity,
	});

	if (isEditing) {
		return null;
	}

	const output = isInfinity ? '∞' : value;

	return (
		<span className={classeName} onClick={onRequestEdit} onKeyDown={onRequestEdit} role='button' tabIndex={0}>
			{output}
		</span>
	);
};

const InlineEditInfinity: React.FC<TextProps> = ({ onChangeValue, value, ...rest }) => {
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
			{...rest}
			inputType='number'
			onChangeValue={onChangeHandler}
			Preview={Preview}
			value={isInfinity ? '' : value}
		/>
	);
};

export default InlineEditInfinity;
