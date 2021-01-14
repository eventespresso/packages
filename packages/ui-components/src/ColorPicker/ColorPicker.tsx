import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import { ColorPicker as ColorPickerAdapter } from '@eventespresso/adapters';
import { useIfMounted } from '@eventespresso/hooks';

import { ColorSwatches } from './ColorSwatches';
import { ColorPickerProps } from './types';
import { BLACK_COLOR } from './constants';

import './color-picker.scss';

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, defaultColor, onChange, ...props }) => {
	const className = classNames('ee-color-picker', props.className);

	const [internalValue, setInternalValue] = useState(defaultColor || BLACK_COLOR);

	const onChangeColor = useCallback<ColorPickerProps['onChange']>(
		(newValue) => {
			if (newValue !== internalValue) {
				onChange?.(newValue);
				setInternalValue(newValue);
			}
		},
		[internalValue, onChange]
	);

	const ifMounted = useIfMounted();
	// if the value changes from the consumer
	useEffect(() => {
		ifMounted(() => {
			if (typeof color !== 'undefined') {
				setInternalValue(color);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color]);

	return (
		<div className={className}>
			<ColorSwatches color={internalValue} onChange={onChangeColor} className='ee-color-picker__swatches' />
			<ColorPickerAdapter className='ee-color-picker__control' color={internalValue} onChange={onChangeColor} />
		</div>
	);
};
