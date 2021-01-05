import { useCallback } from 'react';
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
	onChangeValue,
	showStepper = true,
	value,
	...props
}) => {
	const size = inputFieldProps?.size && Number(inputFieldProps?.size);

	const onChangeHandler = useCallback<NumberInputProps['onChange']>(
		(valueAsString, valueAsNumber) => {
			onChangeValue?.(valueAsNumber);

			onChange?.(valueAsString, valueAsNumber);
		},
		[onChange, onChangeValue]
	);

	return (
		<ChakraNumberInput
			{...props}
			className={className}
			isDisabled={isDisabled}
			onChange={onChangeHandler}
			value={value}
		>
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
