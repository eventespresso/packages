import { useEffect, useState } from 'react';
import { useForm, AnyObject } from 'react-final-form';

import { isEqualJson } from '@eventespresso/utils';

const useFormValues = <T extends AnyObject>(initialValue?: T): T => {
	const [formValues, setFormValues] = useState(initialValue);

	const form = useForm<T>();

	useEffect(() => {
		return form.subscribe(
			({ values }) => {
				setFormValues((prevValues) => (isEqualJson(prevValues, values) ? prevValues : values));
			},
			{ values: true }
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return formValues;
};

export default useFormValues;
