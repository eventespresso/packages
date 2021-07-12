import { __ } from '@eventespresso/i18n';
import { NumberInputWithLabel, SwitchWithLabel, TextInputWithLabel, withLabel } from '@eventespresso/ui-components';
import { DatePicker, TimePicker } from '@eventespresso/dates';

import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';
import { isDateField, isNumericField, isTextField, isFieldOfType } from '../../utils';

const DatePickerWithLabel = withLabel(DatePicker);
const TimePickerWithLabel = withLabel(TimePicker);

const monthFieldProps = {
	showMonthYearPicker: true,
	dateFormat: 'MM/yyyy',
};

export const Validation: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<SwitchWithLabel
				label={__('required')}
				onChangeValue={onChangeValue('required.required')}
				isChecked={element.required?.required}
			/>
			<TextInputWithLabel
				label={__('required text')}
				onChangeValue={onChangeValue('required.validationText')}
				value={element.required?.validationText}
			/>
			{isTextField(element) && (
				<>
					<SwitchWithLabel
						label={__('autocomplete')}
						onChangeValue={onChangeValue('attributes.autocomplete')}
						isChecked={element.attributes?.autocomplete}
					/>
					<TextInputWithLabel
						label={__('pattern')}
						onChangeValue={onChangeValue('attributes.pattern')}
						value={element.attributes?.pattern}
					/>
				</>
			)}
			{isNumericField(element) && (
				<>
					<NumberInputWithLabel
						label={__('min')}
						onChangeValue={onChangeValue('attributes.min')}
						value={element.attributes?.min}
					/>
					<NumberInputWithLabel
						label={__('max')}
						onChangeValue={onChangeValue('attributes.max')}
						value={element.attributes?.max}
					/>
				</>
			)}
			{isDateField(element) && (
				<>
					<DatePickerWithLabel
						label={__('min')}
						onChange={onChangeValue('attributes.minDate')}
						value={element.attributes?.minDate}
						{...(element.type === 'MONTH' && monthFieldProps)}
					/>
					<DatePickerWithLabel
						label={__('max')}
						onChange={onChangeValue('attributes.maxDate')}
						value={element.attributes?.maxDate}
						{...(element.type === 'MONTH' && monthFieldProps)}
					/>
				</>
			)}
			{isFieldOfType(['TIME'], element) && (
				<>
					<TimePickerWithLabel
						label={__('min')}
						onChange={onChangeValue('attributes.minDate')}
						value={element.attributes?.minDate}
					/>
					<TimePickerWithLabel
						label={__('max')}
						onChange={onChangeValue('attributes.maxDate')}
						value={element.attributes?.maxDate}
					/>
				</>
			)}
		</>
	);
};
