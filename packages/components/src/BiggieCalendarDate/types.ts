import type { CalendarDateProps } from '../types';

export interface CommonInputProps<T = Element, V = React.ReactText> {
	onChangeValue?: (value: V, event?: React.ChangeEvent<T> | React.FormEvent<T>) => void;
}

export interface BiggieCalendarDateProps extends CalendarDateProps {
	date: Date | string;
	timeRange?: string;
}
