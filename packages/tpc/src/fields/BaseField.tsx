import { createElement } from 'react';
import classNames from 'classnames';
import { TextInput, Select } from '@eventespresso/ui-components';

import useBaseField from './useBaseField';
import type { BaseFieldProps } from './types';

const BaseField: React.FC<BaseFieldProps> = ({
	children,
	component,
	name,
	format,
	formatOnBlur,
	parse,
	getValue,
	setValue,
	value,
	...props
}) => {
	const { fieldValue, handlers } = useBaseField({
		component,
		name,
		format,
		formatOnBlur,
		parse,
		getValue,
		setValue,
		value,
	});
	const className = classNames(props.className, 'ee-input-base ee-input');

	if (component === 'select') {
		return (
			<Select
				aria-label={props['aria-label']}
				isDisabled={props.disabled}
				// @ts-ignore
				onBlur={handlers?.onBlur}
				// @ts-ignore
				onChange={handlers?.onChange}
				value={fieldValue as string}
			>
				{children}
			</Select>
		);
	}

	if (props.type === 'text') {
		return (
			<TextInput {...handlers} {...props} className={className} value={fieldValue as string}>
				{children}
			</TextInput>
		);
	}

	if (typeof component === 'string') {
		return createElement(component, { ...handlers, ...props, className, value: fieldValue }, children);
	}

	return null;
};

export default BaseField;
