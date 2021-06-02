import type { CheckboxGroupProps, OptionProps } from '@eventespresso/adapters';

export interface MultiCheckboxProps extends CheckboxGroupProps {
	options?: Array<Omit<OptionProps, 'options'>>;
}
