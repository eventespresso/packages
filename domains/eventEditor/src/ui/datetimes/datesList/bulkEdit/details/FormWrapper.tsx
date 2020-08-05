import React from 'react';
import type { FormRenderProps } from 'react-final-form';
import { useBulkEdit } from '@eventespresso/services';

import Submit from './Submit';

const FormWrapper: React.FC<FormRenderProps> = ({ children, form }) => {
	const { getSelected } = useBulkEdit();
	return (
		<>
			<p>
				{
					//TODO: display list of selected dates
					getSelected().join(', ')
				}
			</p>
			{children}
			<Submit form={form} />
		</>
	);
};

export default FormWrapper;
