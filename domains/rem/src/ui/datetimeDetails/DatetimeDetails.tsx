import React, { useState } from 'react';
import { isEmpty } from 'ramda';

import { Datetime } from '@eventespresso/edtr-services';
import { FormWithConfig } from '@eventespresso/components';
import useDatetimeFormConfig from './useDateFormConfig';
import type { DatetimeDetailsProps } from './types';
import FormWrapper from './FormWrapper';
import DateTemplate from './DateTemplate';
import { useFormState } from '../../data';

const DatetimeDetails: React.FC<DatetimeDetailsProps> = () => {
	const [templateDate, setTemplateDate] = useState<Datetime>();
	const { dateDetails } = useFormState();
	const formConfig = useDatetimeFormConfig(templateDate, { initialValues: dateDetails });

	// if date details have not been set already
	// and we have no template date set
	if (isEmpty(dateDetails) && !templateDate) {
		return <DateTemplate setTemplate={setTemplateDate} />;
	}

	return <FormWithConfig {...formConfig} formWrapper={FormWrapper} />;
};

export default DatetimeDetails;
