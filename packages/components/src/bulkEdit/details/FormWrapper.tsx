import React from 'react';
import type { FormRenderProps } from 'react-final-form';

import Submit from './Submit';

const FormWrapper: React.FC<FormRenderProps> = ({ children, form }) => {
	return (
		<>
			{children}
			<Submit form={form} />
		</>
	);
};

export default FormWrapper;
