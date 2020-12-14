import React from 'react';

import { useFormConfig } from './config';
import EspressoForm from '../EspressoForm';
import type { FieldProps } from '../';

const subscription = {};

export interface TestFormProps extends Pick<FieldProps, 'columns'> {}

const TestForm: React.FC<TestFormProps> = ({ columns }) => {
	const config = useFormConfig({ columns });

	return <EspressoForm {...config} subscription={subscription} />;
};

export default TestForm;
