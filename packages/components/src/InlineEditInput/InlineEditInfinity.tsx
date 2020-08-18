import React, { useCallback } from 'react';
import classNames from 'classnames';

import { isInfinite, parseInfinity } from '@eventespresso/services';
import { InlineEdit } from '@eventespresso/adapters';
import type { PreviewProps } from './types';

import { TabbableText } from '../index';
import type { TextProps } from './types';

const Preview: React.FC<PreviewProps> = ({ value, onRequestEdit, isEditing, ...props }) => {
	const isInfinity = isInfinite(value);
	const className = classNames('ee-inline-edit__infinity', {
		'ee-infinity-sign': isInfinity,
	});

	if (isEditing) {
		return null;
	}

	const output = isInfinity ? <span className={'ee-infinity-sign__inner'}>{'∞'}</span> : value;

	return <TabbableText {...props} className={className} onClick={onRequestEdit} text={output} />;
};

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
