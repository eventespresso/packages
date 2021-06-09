import { useCallback, useEffect, useMemo, useReducer } from 'react';
import * as R from 'ramda';

import type { FormStateManager, FormStateManagerHook } from './types';
import { useFormStateReducer, initialState } from './useFormStateReducer';
import { useInitialState } from './useInitialState';
import { sortByOrder, isNotSharedOrDefault } from '../utils';

type FSM = FormStateManager;

export const useFormStateManager: FormStateManagerHook = (props) => {
	const initializer = useInitialState(props);
	const reducer = useFormStateReducer(initializer);
	const [state, dispatch] = useReducer(reducer, initialState, initializer);

	useEffect(() => {
		console.log('FormState', state);
	}, [state]);

	const getData = useCallback<FSM['getData']>(() => state, [state]);

	const getSections = useCallback<FSM['getSections']>(() => {
		const sections = Object.values(state.sections).filter(isNotSharedOrDefault);
		return sortByOrder(sections);
	}, [state]);

	const getElements = useCallback<FSM['getElements']>(
		({ sectionId }) => {
			let elements = Object.values(state.elements);
			if (sectionId) {
				elements = elements.filter(R.propEq('belongsTo', sectionId));
			}
			return sortByOrder(elements);
		},
		[state]
	);

	const addSection = useCallback<FSM['addSection']>(({ section, afterUuid }) => {
		dispatch({
			type: 'ADD_SECTION',
			afterUuid,
			section,
		});
	}, []);

	const copySection = useCallback<FSM['copySection']>(({ UUID, section }) => {
		dispatch({
			type: 'COPY_SECTION',
			UUID,
			section,
		});
	}, []);

	const moveSection = useCallback<FSM['moveSection']>(({ UUID, index }) => {
		dispatch({
			type: 'MOVE_SECTION',
			UUID,
			index,
		});
	}, []);

	const updateSection = useCallback<FSM['updateSection']>(({ UUID, section }) => {
		dispatch({
			type: 'UPDATE_SECTION',
			UUID,
			section,
		});
	}, []);

	const deleteSection = useCallback<FSM['deleteSection']>(({ UUID }) => {
		dispatch({
			type: 'DELETE_SECTION',
			UUID,
		});
	}, []);

	const addElement = useCallback<FSM['addElement']>(({ element }) => {
		dispatch({
			type: 'ADD_ELEMENT',
			element,
		});
	}, []);

	const copyElement = useCallback<FSM['copyElement']>(({ UUID }) => {
		dispatch({
			type: 'COPY_ELEMENT',
			UUID,
		});
	}, []);

	const moveElement = useCallback<FSM['moveElement']>(({ UUID, index, sectionId }) => {
		dispatch({
			type: 'MOVE_ELEMENT',
			UUID,
			index,
			sectionId,
		});
	}, []);

	const updateElement = useCallback<FSM['updateElement']>(({ UUID, element }) => {
		dispatch({
			type: 'UPDATE_ELEMENT',
			UUID,
			element,
		});
	}, []);

	const deleteElement = useCallback<FSM['deleteElement']>(({ UUID }) => {
		dispatch({
			type: 'DELETE_ELEMENT',
			UUID,
		});
	}, []);

	const isElementOpen = useCallback<FSM['isElementOpen']>(({ UUID }) => UUID === state.openElement, [
		state.openElement,
	]);

	const toggleOpenElement = useCallback<FSM['toggleOpenElement']>(({ openElement }) => {
		dispatch({
			type: 'TOGGLE_OPEN_ELEMENT',
			openElement,
		});
	}, []);

	const reset = useCallback<FSM['reset']>(() => {
		dispatch({ type: 'RESET' });
	}, []);

	return useMemo<FSM>(
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
			moveElement,
			moveSection,
			reset,
			toggleOpenElement,
			updateElement,
			updateSection,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[state]
	);
};
