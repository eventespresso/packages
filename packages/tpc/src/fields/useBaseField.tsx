import type { BaseFieldProps, FieldValue, InputProps } from './types';

const defaultFormat: BaseFieldProps['format'] = (value, name) => (value === undefined ? '' : value);
const defaultParse: BaseFieldProps['parse'] = (value, name) => (value === '' ? undefined : value);

type BaseField = {
	handlers: InputProps;
	fieldValue: FieldValue;
};

const useBaseField = ({
	component,
	name,
	format = defaultFormat,
	formatOnBlur,
	parse = defaultParse,
	getValue,
	setValue,
	value,
}: BaseFieldProps): BaseField => {
	let fieldValue = (value || getValue()) as FieldValue;

	if (formatOnBlur) {
		if (component === 'input') {
			fieldValue = defaultFormat(fieldValue, name);
		}
	} else {
		fieldValue = format(fieldValue, name);
	}

	if (fieldValue === null) {
		fieldValue = '';
	}

	return useMemo<BaseField>(() => {
		const handlers: InputProps = {
			onBlur: () => {
				if (formatOnBlur) {
					setValue(format(getValue(), name));
				}
			},
			onChange: (event) => {
				const value = event?.target?.value;
				setValue(parse(value, name));
			},
		};

		return {
			handlers,
			fieldValue,
		};
	}, [fieldValue, formatOnBlur, setValue, format, getValue, name, parse]);
};

export default useBaseField;
