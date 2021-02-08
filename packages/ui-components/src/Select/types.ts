import type { SelectProps as AdapterSelectProps } from '@eventespresso/adapters';
import type { WithLabelProps } from '../withLabel';

export interface SelectProps extends AdapterSelectProps, WithLabelProps {
	flow?: 'inline';
}
