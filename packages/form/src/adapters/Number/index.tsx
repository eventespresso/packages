import React from 'react';
import classNames from 'classnames';

import { NumberInput } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../../types';
import './style.scss';

const inputStepperProps = { className: 'ee-number-field-stepper' };

const Number: React.FC<FieldRendererProps> = ({ id, input: { onChange, value, ...input }, ...props }) => {
	const className = classNames('ee-number-input-wrapper', props.className);
	const ariaValuenow = String(value)?.length ? value : null;

	return (
		<NumberInput
			aria-valuenow={ariaValuenow}
			className={className}
			id={id}
			inputFieldProps={input}
			inputStepperProps={inputStepperProps}
			onChange={onChange}
			value={value}
		/>
	);
};

export default Number;
