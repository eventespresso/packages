import React from 'react';
import classNames from 'classnames';
import {
	NumberInput as ChakraNumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/core';

import type { NumberInputProps } from './types';

const NumberInput: React.FC<NumberInputProps> = ({
	decrementStepperProps,
	incrementStepperProps,
	showStepper = true,
	id,
	inputFieldProps,
	inputStepperProps,
	...props
}) => {
	const inputFieldClassName = classNames('ee-input-base ee-input', props.className);

	return (
		<ChakraNumberInput {...props}>
			<NumberInputField {...inputFieldProps} className={inputFieldClassName} id={id} />
			{showStepper && (
				<NumberInputStepper {...inputStepperProps}>
					<NumberIncrementStepper {...incrementStepperProps} />
					<NumberDecrementStepper {...decrementStepperProps} />
				</NumberInputStepper>
			)}
		</ChakraNumberInput>
	);
};

export default NumberInput;
