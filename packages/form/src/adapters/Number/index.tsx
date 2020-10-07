import React from 'react';
import classNames from 'classnames';

import { NumberInput } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../../types';
import './style.scss';

const inputStepperProps = { className: 'ee-number-field-stepper' };

const Number: React.FC<FieldRendererProps> = ({
	input: { onChange, value, ...input },
	meta: { error, submitError },
	...props
}) => {
	const className = classNames('ee-number-input-wrapper', props.className);

	return (
		<NumberInput
			inputFieldProps={input}
			inputStepperProps={inputStepperProps}
			isInvalid={error || submitError}
			onChange={onChange}
			value={value}
			{...props}
			className={className}
		/>
	);
};

export default Number;
