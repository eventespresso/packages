import React, { useEffect } from 'react';
import type { FormRenderProps } from 'react-final-form';
import { useFormState } from '../../services/data';

const FormWrapper: React.FC<FormRenderProps> = ({ children, form }) => {
	const { setDateDetails } = useFormState();

	useEffect(() => {
		// subscribe to RFF form state.
		const unsubscribe = form.subscribe(
			(state) => {
				setDateDetails(state?.values);
			},
			{ values: true }
		);

		// housekeeping
		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
};

export default FormWrapper;
