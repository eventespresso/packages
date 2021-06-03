import type { CheckboxGroupProps, OptionProps, StackProps } from '@eventespresso/adapters';

export interface MultiCheckboxProps extends CheckboxGroupProps {
	options?: Array<Omit<OptionProps, 'options'>>;
	direction?: StackProps['direction'];
}
