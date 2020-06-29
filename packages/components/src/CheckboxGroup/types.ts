import { CheckboxProps } from '@eventespresso/adapters';

export interface CheckboxChangeEventTarget extends CheckboxProps {
	checked: boolean;
}

export interface CheckboxChangeEvent {
	target: CheckboxChangeEventTarget;
	stopPropagation: () => void;
	preventDefault: () => void;
	nativeEvent: MouseEvent;
}

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
	label: React.ReactNode;
	value: CheckboxValueType;
	disabled?: boolean;
	onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxGroupProps {
	defaultCheckedOptions?: Array<CheckboxOptionType | string>;
	onChange?: (checkedValue: Array<CheckboxValueType>) => void;
	options?: Array<CheckboxOptionType | string>;
}
