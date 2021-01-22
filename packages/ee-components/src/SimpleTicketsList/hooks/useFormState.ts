import { useContext } from 'react';
import invariant from 'invariant';

import { FormStateContext } from '../context';
import type { FormState } from '../types';

export const useFormState = (): FormState => {
	const state = useContext(FormStateContext);

	invariant(state, 'useFormState must be used inside FormStateProvider');

	return state;
};
