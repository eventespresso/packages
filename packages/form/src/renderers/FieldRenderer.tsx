import React from 'react';
import classNames from 'classnames';

import { FormControl, FormLabel } from '@eventespresso/adapters';
import { ErrorMessage } from '../../../components/src/ErrorMessage';
import { HelperText } from '../HelperText';

import MappedField from '../adapters/MappedField';
import type { FieldRendererProps } from '../types';

const FieldRenderer: React.FC<FieldRendererProps> = (props) => {
	const { after, before, description, formControlProps, info, label, required, ...rest } = props;

	const { meta } = props;

	// no layout stuff needed for hidden field
	if (props.fieldType === 'hidden') {
		return <MappedField {...rest} />;
	}

	const className = classNames(
		'ee-input__wrapper ee-form-item',
		info && 'ee-form-item--has-info',
		`ee-form-item__${rest.fieldType}`,
		formControlProps?.className
	);

	const isDateOrTimePicker = ['datepicker', 'datetimepicker', 'timepicker'].includes(props.fieldType);

	// since we don't have access to focus event of pickers' input, it will never be touched
	// we still need to be able to show validation error message
	const errorMessage = (meta.touched || isDateOrTimePicker) && (meta.error || meta.submitError);

	const isInvalid = Boolean(errorMessage);

	const tooltipKey = info ? props.input.name + '-tooltip' : null;

	const errorMessageId = props.input.name + '-error-message';

	const ariaDescribedBy = isInvalid ? errorMessageId : tooltipKey;

	return (
		<FormControl className={className} isInvalid={isInvalid} isRequired={required}>
			<FormLabel htmlFor={props.input.name}>{label}</FormLabel>
			{before}
			<MappedField
				{...rest}
				aria-describedby={ariaDescribedBy}
				aria-invalid={isInvalid}
				aria-label={label}
				id={props.input.name}
				isInvalid={isInvalid}
			/>
			{after}
			<ErrorMessage id={errorMessageId} message={errorMessage || meta.data?.fieldNotice} />
			<HelperText id={tooltipKey}>{description || info}</HelperText>
		</FormControl>
	);
};

export default FieldRenderer;
