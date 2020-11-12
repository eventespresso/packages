import type { SelectProps as AdapterSelectProps } from '@eventespresso/adapters';
import type { withLabelProps, withTooltipProps } from '../../';

export interface SelectProps extends AdapterSelectProps, Partial<withLabelProps>, Partial<withTooltipProps> {
	onSubmit?: VoidFunction;
	type?: 'inline';
}
