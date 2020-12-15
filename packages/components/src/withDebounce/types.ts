import { CommonInputProps } from '@eventespresso/adapters';

export interface WithDebounceProps {
	debounceDelay?: number;
}

export interface InternalDebounceProps extends CommonInputProps<any, any> {
	value?: any;
	isChecked?: boolean;
}
