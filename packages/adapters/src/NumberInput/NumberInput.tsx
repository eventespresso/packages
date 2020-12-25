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
	isDisabled,
	id,
	incrementStepperProps,
	inputFieldProps,
	inputStepperProps,
	onChange,
	showStepper = true,
	value,
	...props
}) => {
	const size = inputFieldProps?.size && Number(inputFieldProps?.size);

	return (
		<ChakraNumberInput {...props} className={className} isDisabled={isDisabled} onChange={onChange} value={value}>
			<NumberInputField {...inputFieldProps} id={id} size={size} />
			{showStepper && (
				<NumberInputStepper {...inputStepperProps}>
					<NumberIncrementStepper {...incrementStepperProps} />
					<NumberDecrementStepper {...decrementStepperProps} />
				</NumberInputStepper>
			)}
		</ChakraNumberInput>
	);
};
