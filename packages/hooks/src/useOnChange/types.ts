import type { CommonInputProps, CommonInputEvent } from '@eventespresso/adapters/src/types';

type T = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export interface UseOnChange extends CommonInputProps<T> {
	onChange?: (event: React.ChangeEvent<T>) => void;
	isDisabled?: boolean;
}

export type UseOnChangeCallback = (e: CommonInputEvent<T>) => void;
