import React from 'react';
import classNames from 'classnames';

import { NumberInput as NumberInputAdapter, NumberInputProps } from '@eventespresso/adapters';

import './style.scss';

const inputStepperProps = { className: 'ee-number-field-stepper' };

export const NumberInput: React.FC<NumberInputProps> = ({ id, inputFieldProps, onChange, value, ...props }) => {
	const className = classNames('ee-number-input-wrapper', props.className);
	const ariaValuenow = String(value)?.length ? Number(value) : null;

	return (
		<NumberInputAdapter
			{...props}
			aria-valuenow={ariaValuenow}
			className={className}
			id={id}
			inputFieldProps={inputFieldProps}
			inputStepperProps={inputStepperProps}
			onChange={onChange}
			value={value}
		/>
	);
};
