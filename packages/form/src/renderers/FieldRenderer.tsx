import React from 'react';
import classNames from 'classnames';

import { FormControl, FormHelperText, FormLabel } from '@eventespresso/adapters';
import { InfoCircleOutlined } from '@eventespresso/icons';
import { reactFinalFormField } from '@eventespresso/services';
import { Tooltip } from '@eventespresso/adapters';

import ErrorMessage from './ErrorMessage';
import type { FieldRendererProps } from '../types';
import { MappedField } from '../adapters';

const FieldRenderer: React.FC<FieldRendererProps> = (props) => {
	const { after, before, description, formControlProps, info, label, required, ...rest } = props;

	const { meta } = props;

	// no layout stuff needed for hidden field
	if (props.fieldType === 'hidden') {
		return <MappedField {...rest} />;
	}

	const className = classNames(
		'ee-input__wrapper ee-form-item',
		`form-item__${rest.fieldType}`,
		formControlProps?.className
	);

	const isDateOrTimePicker = ['datepicker', 'timepicker'].includes(props.fieldType);

	// since we don't have access to focus event of pickers' input, it will never be touched
	// we still need to be able to show validation error message
	const errorMessage = (meta.touched || isDateOrTimePicker) && (meta.error || meta.submitError);

	const tooltipKey = info ? props.input.name + '-tooltip' : null;

	return (
		<FormControl className={className} isInvalid={Boolean(errorMessage)} isRequired={required}>
			<FormLabel htmlFor={props.input.name}>
				{label && label}
				{info && (
					<Tooltip placement='right' tooltip={info}>
						<InfoCircleOutlined />
					</Tooltip>
				)}
			</FormLabel>
			{before}
			<MappedField aria-label={label} aria-describedby={tooltipKey} {...rest} />
			{after}
			<ErrorMessage message={errorMessage} />
			<FormHelperText>{description}</FormHelperText>
		</FormControl>
	);
};
export default React.memo(FieldRenderer, reactFinalFormField);
