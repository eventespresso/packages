import { useContext } from 'react';
import invariant from 'invariant';

import { FormStateContext } from '../context';
import type { FormStateManager } from './types';

export const useFormState = (): FormStateManager => {
	const state = useContext(FormStateContext);

	invariant(state, 'useFormState must be used inside FormStateProvider');

	return state;
};
