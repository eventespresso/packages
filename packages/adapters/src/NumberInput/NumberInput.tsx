import React from 'react';
import {
	NumberInput as ChakraNumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/core';

import type { NumberInputProps } from './types';

export const NumberInput: React.FC<NumberInputProps> = ({
	className,
	decrementStepperProps,
	id,
	incrementStepperProps,
	inputFieldProps,
	inputStepperProps,
	onChange,
	showStepper = true,
	value,
}) => {
	return (
		<ChakraNumberInput className={className} onChange={onChange} value={value}>
			<NumberInputField {...inputFieldProps} id={id} />
			{showStepper && (
				<NumberInputStepper {...inputStepperProps}>
					<NumberIncrementStepper {...incrementStepperProps} />
					<NumberDecrementStepper {...decrementStepperProps} />
				</NumberInputStepper>
			)}
		</ChakraNumberInput>
	);
};
