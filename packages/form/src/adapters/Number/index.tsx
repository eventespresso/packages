import React from 'react';
import classNames from 'classnames';

import { NumberInput } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../../types';
import './style.scss';

const inputStepperProps = { className: 'ee-number-field-stepper' };

const Number: React.FC<FieldRendererProps> = ({ input: { onChange, value, ...input }, ...props }) => {
	const className = classNames('ee-number-input-wrapper', props.className);
	const ariaValuenow = value?.length ? value : null;

	return (
		<NumberInput
			inputFieldProps={input}
			inputStepperProps={inputStepperProps}
			onChange={onChange}
			value={value}
			{...props}
			aria-valuenow={ariaValuenow}
			className={className}
		/>
	);
};

export default Number;
