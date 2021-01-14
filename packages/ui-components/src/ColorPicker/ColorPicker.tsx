import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { ColorPicker as ColorPickerAdapter } from '@eventespresso/adapters';
import { useIfMounted } from '@eventespresso/hooks';

import { Button, ButtonType } from '../Button';
import { ColorSwatches } from './ColorSwatches';
import { ColorPickerProps } from './types';
import { BLACK_COLOR } from './constants';
import { withLabel } from '../withLabel';
import { withDebounce } from '../withDebounce';
import { equalColorString } from './utils';

import './color-picker.scss';

const CustomColorPicker = withDebounce(withLabel<ColorPickerProps>(ColorPickerAdapter), 'color', 'onChange');

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, defaultColor, onChange, ...props }) => {
	const className = classNames('ee-color-picker', props.className);

	const [internalValue, setInternalValue] = useState(defaultColor || BLACK_COLOR);
	const [showCustomColor, setShowCustomColor] = useState(false);

	const onChangeColor = useCallback<ColorPickerProps['onChange']>(
		(newValue) => {
			if (!equalColorString(newValue, internalValue)) {
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
			setInternalValue(color);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color]);

	const onClickCustomColor = useCallback(() => setShowCustomColor(true), []);

	return (
		<div className={className}>
			<ColorSwatches color={internalValue} onChange={onChangeColor} className='ee-color-picker__swatches' />

			{showCustomColor ? (
				<CustomColorPicker
					className='ee-color-picker__control'
					color={internalValue}
					onChange={onChangeColor}
					debounceDelay={200}
				/>
			) : (
				<Button
					buttonText={__('Custom color')}
					buttonType={ButtonType.MINIMAL}
					onClick={onClickCustomColor}
					size='small'
				/>
			)}
		</div>
	);
};
