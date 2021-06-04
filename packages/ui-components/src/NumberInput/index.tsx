import classNames from 'classnames';

import { NumberInput as NumberInputAdapter, NumberInputProps } from '@eventespresso/adapters';

import { withLabel } from '../withLabel';

import './style.scss';

interface Props extends NumberInputProps {
	visibleDigits?: number;
}

const inputStepperProps = { className: 'ee-number-field-stepper' };

export const NumberInput: React.FC<Props> = ({
	id,
	inputFieldProps,
	onChange,
	showStepper,
	value,
	visibleDigits,
	...props
}) => {
	const visibleDigitsClassName =
		showStepper === false &&
		visibleDigits &&
		`ee-number-input--visible-digits ee-number-input--visible-digits-${visibleDigits}`;

	const className = classNames('ee-number-input', visibleDigitsClassName, props.className);
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
			showStepper={showStepper}
			value={value}
		/>
	);
};

export const NumberInputWithLabel = withLabel(NumberInput);
