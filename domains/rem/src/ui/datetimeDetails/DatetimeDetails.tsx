import React from 'react';

import { EspressoForm } from '@eventespresso/form';
import useDatetimeFormConfig from './useDateFormConfig';
import type { DatetimeDetailsProps } from './types';
import FormWrapper from './FormWrapper';

const DatetimeDetails: React.FC<DatetimeDetailsProps> = () => {
	const formConfig = useDatetimeFormConfig();

	return <EspressoForm {...formConfig} formWrapper={FormWrapper} />;
};

export default DatetimeDetails;
