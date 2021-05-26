import { useCallback, useEffect, useMemo, useReducer } from 'react';

import type { FormStateManager, FormStateManagerHook } from './types';
import { useFormStateReducer, initialState } from './useFormStateReducer';
import { useInitialState } from './useInitialState';

type FSM = FormStateManager;

export const useFormStateManager: FormStateManagerHook = (initialSections) => {
	const initializer = useInitialState(initialSections);
	const reducer = useFormStateReducer(initializer);
	const [state, dispatch] = useReducer(reducer, initialState, initializer);

	useEffect(() => {
		console.log('FormState', state);
	}, [state]);

	const getData: FSM['getData'] = useCallback(() => state, [state]);

	const getSections: FSM['getSections'] = useCallback(() => Object.values(state.sections), [state]);

	const addSection: FSM['addSection'] = useCallback((section) => {
		dispatch({
			type: 'ADD_SECTION',
			section,
		});
	}, []);

	const updateSection: FSM['updateSection'] = useCallback((id, section) => {
		dispatch({
			type: 'UPDATE_SECTION',
			id,
			section,
		});
	}, []);

	const deleteSection: FSM['deleteSection'] = useCallback((id) => {
		dispatch({
			type: 'DELETE_SECTION',
			id,
		});
	}, []);

	const addElement: FSM['addElement'] = useCallback((sectionId, element) => {
		dispatch({
			type: 'ADD_ELEMENT',
			sectionId,
			element,
		});
	}, []);

	const updateElement: FSM['updateElement'] = useCallback((sectionId, id, element) => {
		dispatch({
			type: 'UPDATE_ELEMENT',
			sectionId,
			id,
			element,
		});
	}, []);

	const deleteElement: FSM['deleteElement'] = useCallback((sectionId, id) => {
		dispatch({
			type: 'DELETE_ELEMENT',
			sectionId,
			id,
		});
	}, []);

	const isElementOpen = useCallback<FSM['isElementOpen']>((UUID) => UUID === state.openElement, [state.openElement]);

	const toggleOpenElement = useCallback<FSM['toggleOpenElement']>(
		(openElement: string) => () => {
			dispatch({
				type: 'TOGGLE_OPEN_ELEMENT',
				openElement,
			});
		},
		[]
	);

	const reset: FSM['reset'] = useCallback(() => {
		dispatch({ type: 'RESET' });
	}, []);

	return useMemo(
		() => ({
			...state,
			addElement,
			addSection,
			deleteElement,
			deleteSection,
			getData,
			getSections,
			isElementOpen,
			reset,
			toggleOpenElement,
			updateElement,
			updateSection,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};
