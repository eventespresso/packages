import React from 'react';
import {
	NumberInput as ChakraNumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';

import type { NumberInputProps } from './types';

export const NumberInput: React.FC<NumberInputProps> = ({
	className,
	decrementStepperProps,
	disabled,
	id,
	incrementStepperProps,
	inputFieldProps,
	inputStepperProps,
	onChange,
	showStepper = true,
	value,
	...props
}) => {
	return (
		<ChakraNumberInput {...props} className={className} onChange={onChange} value={value}>
			<NumberInputField {...inputFieldProps} id={id} isDisabled={disabled} />
			{showStepper && (
				<NumberInputStepper {...inputStepperProps}>
					<NumberIncrementStepper {...incrementStepperProps} />
					<NumberDecrementStepper {...decrementStepperProps} />
				</NumberInputStepper>
			)}
		</ChakraNumberInput>
	);
};
