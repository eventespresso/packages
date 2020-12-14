import type { SelectProps as AdapterSelectProps } from '@eventespresso/adapters';

export interface SelectProps extends AdapterSelectProps {
	onSubmit?: VoidFunction;
	type?: 'inline';
}
