import { __ } from '@eventespresso/i18n';
import { DEFAULT_TIME_FORMAT } from '@eventespresso/constants';

import { DatePicker } from './DatePicker';
import type { DatePickerProps } from '../types';

export const TimePicker: React.FC<DatePickerProps> = (props) => {
	return (
		<DatePicker
			calendarClassName='ee-timepicker'
			dateFormat={props.timeFormat || DEFAULT_TIME_FORMAT}
			showTimeSelect
			showTimeSelectOnly
			timeCaption={__('time')}
			timeIntervals={15}
			{...props}
		/>
	);
};
