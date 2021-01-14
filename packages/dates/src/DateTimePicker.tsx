import { __ } from '@eventespresso/i18n';

import { DatePicker } from './DatePicker';
import { DEFAULT_DATETIME_FORMAT } from './constants';
import type { DatePickerProps } from './types';

export const DateTimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			calendarClassName='ee-datetime-picker'
			dateFormat={DEFAULT_DATETIME_FORMAT}
			showTimeSelect
			timeCaption={__('time')}
			{...props}
		/>
	);
};
