import { DatePicker as DatePickerAdapter, DatePickerProps } from '@eventespresso/dates';
import { useConfig } from '@eventespresso/services';

export const DatePicker: React.FC<DatePickerProps> = ({ onChange, value, ...props }) => {
	const {
		dateTimeFormats: { dateFormat },
		locale: { user },
	} = useConfig();

	return (
		<DatePickerAdapter
			className='ee-date-picker'
			dateFormat={dateFormat}
			locale={user}
			onChange={onChange}
			value={value}
			{...props}
		/>
	);
};
