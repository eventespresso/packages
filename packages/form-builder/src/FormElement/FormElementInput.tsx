import { memo, useMemo } from 'react';

import { FormControl, FormHelperText } from '@eventespresso/adapters';
import { AnyObject, getPropsAreEqual } from '@eventespresso/utils';
import { getDaysDropdownOptions, getMonthsDropdownOptions, getYearsDropdownOptions } from '@eventespresso/dates';

import { MappedElement } from './MappedElement';
import type { FormElementProps } from '../types';
import { useUpdateElement } from './useUpdateElement';

export const FormElementInput = memo<FormElementProps>(({ element }) => {
	const onChangeValue = useUpdateElement(element);

	const props = useMemo(() => {
		let inputProps: AnyObject = {
			placeholder: element.attributes?.placeholder,
			// ensure that the field is not required inside form builder 😄
			required: false,
		};
		switch (element.type) {
			case 'CHECKBOX_MULTI':
			case 'RADIO':
			case 'SELECT':
				// Display only the options which have both value and label
				inputProps.options = (element.options || []).filter(({ value, label }) => value && label);
				break;
			case 'SELECT_COUNTRY':
			case 'SELECT_STATE':
				// TODO generate the options dynamically
				inputProps.options = element.options || [];
				break;
			case 'DAY_SELECT':
				inputProps.options = getDaysDropdownOptions();
				break;
			case 'MONTH_SELECT':
				inputProps.options = getMonthsDropdownOptions();
				break;
			case 'YEAR_SELECT':
				// TODO add configuration for this dropdown
				inputProps.options = getYearsDropdownOptions({ endYear: 'current' });
				break;
			case 'DATE':
			case 'DATETIME_LOCAL':
			case 'MONTH':
			case 'WEEK':
			case 'TIME':
				inputProps = {
					...inputProps,
					// Datepicker has to be controlled, so we need to pass the value and onChange
					value: element.value,
					onChange: onChangeValue('value'),
				};
				break;
			case 'EMAIL':
			case 'PASSWORD':
			case 'TEL':
			case 'TEXT':
			case 'URL':
				inputProps.type = element.type;
				break;
			case 'EMAIL_CONFIRMATION':
				inputProps.type = 'email';
				break;
			case 'DECIMAL':
			case 'INTEGER':
				inputProps.min = element.attributes?.min;
				inputProps.max = element.attributes?.max;
				break;
			case 'HTML':
				inputProps.value = element.attributes?.html;
				inputProps.toolbarHidden = true;
				inputProps.readonly = true;
				inputProps.isDisabled = true;
				break;
		}
		return inputProps;
	}, [element, onChangeValue]);

	return (
		<FormControl className='ee-form-element__input'>
			<MappedElement
				type={element.type}
				id={element.id}
				label={element.label?.publicLabel || element.label?.adminLabel}
				isRequired={element.required?.required}
				{...props}
			/>
			{element.helpText?.helpText && <FormHelperText>{element.helpText?.helpText}</FormHelperText>}
		</FormControl>
	);
}, getPropsAreEqual([['element']]));
