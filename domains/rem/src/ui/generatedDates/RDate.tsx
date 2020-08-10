import React, { useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { formatISO } from 'date-fns';

import { Button } from '@eventespresso/components';
import { Box, DatePicker } from '@eventespresso/adapters';
import { useTimeZoneTime } from '@eventespresso/services';
import { Insert } from '@eventespresso/icons';
import { useFormState } from '../../data';

import type { DatePickerProps } from '@eventespresso/adapters';

const RDate: React.FC = () => {
	const { addRDate } = useFormState();
	const [date, setDate] = useState<DatePickerProps['value']>();
	const { siteTimeToUtc } = useTimeZoneTime();

	const onAddDate = useCallback(() => {
		addRDate(formatISO(siteTimeToUtc(date)));
		setDate(null);
	}, [addRDate, date, siteTimeToUtc]);

	const onChange = useCallback<DatePickerProps['onChange']>((newDate) => {
		console.log('RDate', newDate);

		setDate(newDate as Date);
	}, []);

	return (
		<Box display='flex' alignItems='center'>
			<DatePicker value={date} onChange={onChange} />
			<Button icon={Insert} onClick={onAddDate} buttonText={__('Add Extra Event Date')} />
		</Box>
	);
};

export default RDate;
