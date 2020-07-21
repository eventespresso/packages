import { useEffect, useState } from 'react';
import type { FormRenderProps } from 'react-final-form';
import { FormState } from 'final-form';
import { TicketFormShape } from './types';

const useFormStateListener = (form: FormRenderProps<TicketFormShape>['form']): FormState<TicketFormShape> => {
	const [state, setState] = useState<FormState<TicketFormShape>>();

	useEffect(() => {
		// subscribe to RFF state.
		const unsubscribe = form.subscribe(
			(state) => {
				setState(state);
			},
			{ values: true, pristine: true, hasValidationErrors: true }
		);

		// housekeeping
		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return state;
};

export default useFormStateListener;
