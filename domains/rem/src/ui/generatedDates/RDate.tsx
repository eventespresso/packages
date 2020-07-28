import React, { useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { formatISO } from 'date-fns';

import { Button } from '@eventespresso/components';
import { Datepicker, DatepickerProps, Box } from '@eventespresso/adapters';
import { useTimeZoneTime } from '@eventespresso/services';
import { Insert } from '@eventespresso/icons';
import { useFormState } from '../../data';

const RDate: React.FC = () => {
	const { addRDate } = useFormState();
	const [date, setDate] = useState<DatepickerProps['value']>();
	const { siteTimeToUtc } = useTimeZoneTime();

	const onAddDate = useCallback(() => {
		addRDate(formatISO(siteTimeToUtc(date)));
		setDate(null);
	}, [addRDate, date, siteTimeToUtc]);

	const onChange = useCallback<DatepickerProps['onChange']>(({ date: newDate }) => {
		setDate(newDate as Date);
	}, []);

	return (
		<Box display='flex' alignItems='center'>
			<Datepicker value={date} onChange={onChange} />
			<Button icon={Insert} onClick={onAddDate} buttonText={__('Add Extra Event Date')} />
		</Box>
	);
};

export default RDate;
