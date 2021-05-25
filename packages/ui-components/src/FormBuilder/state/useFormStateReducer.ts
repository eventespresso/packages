import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { append, assocPath, findIndex, lensPath, mergeLeft, omit, over, propEq, reject } from 'ramda';

import { FormStateReducer, StateInitializer, FormState } from './types';
import { FormElement } from '../types';

export const initialState: FormState = {
	sections: {},
	isDirty: false,
};

export const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	return useCallback<FormStateReducer>(
		(state, action) => {
			const { id, section, sectionId, element, type, openElement } = action;
			let UUID: string, newState: FormState, existingElementIdx: number;

			switch (type) {
				case 'ADD_SECTION':
				case 'UPDATE_SECTION':
					// use id to update and uuid to add new
					UUID = id || uuidv4();
					// we need to make the id inside section and in sections object same
					newState = assocPath(['sections', UUID], { ...section, UUID }, state);
					break;

				case 'DELETE_SECTION':
					newState = {
						...state,
						sections: omit([id], state.sections),
					};
					break;

				case 'ADD_ELEMENT':
					newState = over(
						lensPath(['sections', sectionId, 'elements']),
						append({ ...element, UUID: element.UUID || uuidv4() }),
						state
					);
					break;

				case 'UPDATE_ELEMENT':
					existingElementIdx = findIndex<FormElement>(
						propEq('UUID', UUID),
						state.sections[sectionId]?.elements || []
					);
					if (existingElementIdx > -1) {
						newState = over(
							lensPath(['sections', sectionId, 'elements', existingElementIdx]),
							mergeLeft(element),
							state
						);
					}
					break;

				case 'DELETE_ELEMENT':
					newState = over(
						lensPath(['sections', sectionId, 'elements']),
						reject<FormElement>(propEq('UUID', UUID)),
						state
					);
					break;

				case 'TOGGLE_OPEN_ELEMENT':
					newState = {
						...state,
						openElement: openElement !== state.openElement ? openElement : '',
					};
					break;

				case 'RESET':
					return initializer(initialState);

				default:
					throw new Error('Unexpected action');
			}

			return { ...state, ...newState, isDirty: true };
		},
		[initializer]
	);
};
