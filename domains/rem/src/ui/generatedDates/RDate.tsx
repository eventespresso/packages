import React, { useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { formatISO } from 'date-fns';

import { Button, DatePicker } from '@eventespresso/components';
import { Box } from '@eventespresso/adapters';
import { useTimeZoneTime } from '@eventespresso/services';
import { Insert } from '@eventespresso/icons';
import { useFormState } from '../../data';

import type { DatePickerProps } from '@eventespresso/dates';

const RDate: React.FC = () => {
	const { addRDate } = useFormState();
	const [date, setDate] = useState<DatePickerProps['value']>();
	const { siteTimeToUtc } = useTimeZoneTime();

	const onAddDate = useCallback(() => {
		addRDate(formatISO(siteTimeToUtc(date)));
		setDate(null);
	}, [addRDate, date, siteTimeToUtc]);

	const onChange = useCallback((newDate: Date) => {
		setDate(newDate);
	}, []);

	return (
		<Box display='flex' alignItems='center'>
			<DatePicker onChange={onChange} value={date} />
			<Button icon={Insert} onClick={onAddDate} buttonText={__('Add Extra Event Date')} isDisabled={!date} />
		</Box>
	);
};

export default RDate;
