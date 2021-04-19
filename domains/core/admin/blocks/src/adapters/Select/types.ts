import type { Props as ReactSelectProps } from 'react-select';

export interface SelectProps extends Omit<ReactSelectProps, 'value'> {
	value: string | number;
	id: string;
}
