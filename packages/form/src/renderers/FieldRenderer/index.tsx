import classNames from 'classnames';

import { FormControl, FormLabel } from '@eventespresso/adapters';
import { Divider, ErrorMessage, InfoMessage } from '@eventespresso/ui-components';

import { HelperText } from '../../HelperText';
import MappedField from '../../adapters/MappedField';
import type { FieldRendererProps } from '../../types';

import './styles.scss';

const FieldRenderer: React.FC<FieldRendererProps> = ({ inline, ...props }) => {
	const { after, before, description, formControlProps, info, label, required, ...rest } = props;

	const { meta } = props;

	// no layout stuff needed for hidden field
	if (props.fieldType === 'hidden') {
		return <MappedField {...rest} />;
	}

	const className = classNames(
		'ee-form-item',
		info && 'ee-form-item--has-info',
		inline && 'ee-form-item--inline',
		`ee-form-item__${rest.fieldType}`,
		formControlProps?.className
	);

	const isDateOrTimePicker = ['datepicker', 'datetimepicker', 'timepicker'].includes(props.fieldType);
	const isToggleType = ['multicheck', 'radio', 'switch'].includes(props.fieldType);

	// since we don't have access to focus event of pickers' input, it will never be touched
	// we still need to be able to show validation error message
	const errorMessage = (meta.touched || isDateOrTimePicker) && (meta.error || meta.submitError);

	const isInvalid = Boolean(errorMessage);

	const tooltipKey = info ? props.input.name + '-tooltip' : null;

	const errorMessageId = props.input.name + '-error-message';
	const infoMessageId = props.input.name + '-info-message';

	const ariaDescribedBy = isInvalid ? errorMessageId : tooltipKey;

	// if it's a checkbox/radio type field, don't use an extra label,
	// rather, render the label as legend
	const formLabelAs = isToggleType ? 'legend' : null;
	const formLabelFor = isToggleType ? null : props.input.name;

	return (
		<FormControl className={className} isInvalid={isInvalid} isRequired={required}>
			<div className='ee-form-item__label'>
				<FormLabel as={formLabelAs} htmlFor={formLabelFor}>
					{label}
				</FormLabel>
				<HelperText id={tooltipKey} tooltipText={description || info} />
			</div>

			<Divider size='smaller' />

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
			<ErrorMessage id={errorMessageId} message={errorMessage} />
			<InfoMessage id={infoMessageId} message={meta.data?.fieldNotice} />
		</FormControl>
	);
};

export default FieldRenderer;
