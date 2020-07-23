import React from 'react';
import { parseISO } from 'date-fns';

import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { Trash } from '@eventespresso/icons';
import { useTimeZoneTime } from '@eventespresso/services';

import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';

interface DatetimeRowProps {
	date: Date;
	onClick: VoidFunction;
	number: number;
}

const DatetimeRow: React.FC<DatetimeRowProps> = ({ date, onClick, number }) => {
	const { formatForSite: format } = useTimeZoneTime();

	const dateObject = date instanceof Date ? date : parseISO(date);
	const title = `${number} ${format(dateObject, LOCALIZED_DATE_FULL_FORMAT)} ${format(
		dateObject,
		TIME_ONLY_12H_SHORT_FORMAT
	)}`;

	return (
		<>
			{title}
			<div className='generated-datetime-trash-div'>
				<Button icon={Trash} onClick={onClick} tooltip={__('Add to Exceptions.')} />
			</div>
		</>
	);
};

export default DatetimeRow;
