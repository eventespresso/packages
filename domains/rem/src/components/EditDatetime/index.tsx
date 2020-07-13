import React from 'react';

import { EspressoForm } from '@eventespresso/form';
import useDatetimeFormConfig from './useDateFormConfig';
import type { EditDatetimeProps } from './types';
import FormWrapper from './FormWrapper';

const EditDatetime: React.FC<EditDatetimeProps> = ({ datetime }) => {
	const formConfig = useDatetimeFormConfig(datetime);

	return <EspressoForm {...formConfig} formWrapper={FormWrapper} />;
};

export default EditDatetime;
