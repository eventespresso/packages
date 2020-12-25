import { DateTimePicker as DateTimePickerAdapter, DatePickerProps } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';

export const DateTimePicker: React.FC<DatePickerProps> = ({ onChange, value, ...props }) => {
	const {
		dateTimeFormats: { dateTimeFormat },
		locale: { user },
	} = useConfig();

	return (
		<DateTimePickerAdapter
			className='ee-date-time-picker'
			dateFormat={dateTimeFormat}
			locale={user}
			onChange={onChange}
			value={value}
			{...props}
		/>
	);
};
