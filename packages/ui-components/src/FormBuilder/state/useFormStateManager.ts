import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { prop, propEq, sortBy } from 'ramda';

import type { FormStateManager, FormStateManagerHook } from './types';
import { useFormStateReducer, initialState } from './useFormStateReducer';
import { useInitialState } from './useInitialState';
import { sortByOrder } from '../utils';

type FSM = FormStateManager;

export const useFormStateManager: FormStateManagerHook = (props) => {
	const initializer = useInitialState(props);
	const reducer = useFormStateReducer(initializer);
	const [state, dispatch] = useReducer(reducer, initialState, initializer);

	useEffect(() => {
		console.log('FormState', state);
	}, [state]);

	const getData = useCallback<FSM['getData']>(() => state, [state]);

	const getSections = useCallback<FSM['getSections']>(() => sortByOrder(Object.values(state.sections)), [state]);

	const getElements = useCallback<FSM['getElements']>(
		(sectionId) => {
			let elements = Object.values(state.elements);
			if (sectionId) {
				elements = elements.filter(propEq('belongsTo', sectionId));
			}
			return sortBy(prop('order'), elements);
		},
		[state]
	);

	const addSection = useCallback<FSM['addSection']>((section, afterUuid) => {
		dispatch({
			type: 'ADD_SECTION',
			afterUuid,
			section,
		});
	}, []);

	const copySection = useCallback<FSM['copySection']>((id) => {
		dispatch({
			type: 'COPY_SECTION',
			id,
		});
	}, []);

	const updateSection = useCallback<FSM['updateSection']>((id, section) => {
		dispatch({
			type: 'UPDATE_SECTION',
			id,
			section,
		});
	}, []);

	const deleteSection = useCallback<FSM['deleteSection']>((id) => {
		dispatch({
			type: 'DELETE_SECTION',
			id,
		});
	}, []);

	const addElement = useCallback<FSM['addElement']>((element) => {
		dispatch({
			type: 'ADD_ELEMENT',
			element,
		});
	}, []);

	const copyElement = useCallback<FSM['copyElement']>((id) => {
		dispatch({
			type: 'COPY_ELEMENT',
			id,
		});
	}, []);

	const updateElement = useCallback<FSM['updateElement']>((id, element) => {
		dispatch({
			type: 'UPDATE_ELEMENT',
			id,
			element,
		});
	}, []);

	const deleteElement = useCallback<FSM['deleteElement']>((id) => {
		dispatch({
			type: 'DELETE_ELEMENT',
			id,
		});
	}, []);

	const isElementOpen = useCallback<FSM['isElementOpen']>((UUID) => UUID === state.openElement, [state.openElement]);

	const toggleOpenElement = useCallback<FSM['toggleOpenElement']>((openElement: string) => {
		dispatch({
			type: 'TOGGLE_OPEN_ELEMENT',
			openElement,
		});
	}, []);

	const reset = useCallback<FSM['reset']>(() => {
		dispatch({ type: 'RESET' });
	}, []);

	return useMemo(
		() => ({
			...state,
			addElement,
			addSection,
			copyElement,
			copySection,
			deleteElement,
			deleteSection,
			getData,
			getElements,
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
