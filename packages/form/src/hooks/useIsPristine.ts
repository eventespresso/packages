import { useEffect, useState } from 'react';
import { useForm } from 'react-final-form';

const useIsPristine = (): boolean => {
	const [isPristine, setIsPristine] = useState(true);

	const form = useForm();

	useEffect(() => {
		return form.subscribe(({ pristine }) => setIsPristine(pristine), { pristine: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isPristine;
};

export default useIsPristine;
