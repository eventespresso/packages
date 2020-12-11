import { CommonInputProps } from '@eventespresso/adapters';

export interface withDebounceProps {
	debounceDelay?: number;
}

export interface InternalDebounceProps extends CommonInputProps<any, any> {
	value?: any;
	isChecked?: boolean;
}
