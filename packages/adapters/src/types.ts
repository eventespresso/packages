export type CommonInputEvent<T = Element> = React.ChangeEvent<T> | React.FormEvent<T>;

export interface CommonInputProps<T = Element, V = React.ReactText> {
	onChangeValue?: (value: V, event?: CommonInputEvent<T>) => void;
}
