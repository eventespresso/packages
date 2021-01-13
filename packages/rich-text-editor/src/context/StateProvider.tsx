import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';

import { useIfMounted, usePrevious } from '@eventespresso/hooks';

import { DraftEditorProps } from '../components';
import { editorStateToHtml, htmlToEditorState } from '../utils';

export type RTEState = [state: EditorState, setInternalState: DraftEditorProps['onChange']];

export interface StateProviderProps {
	defaultValue?: string;
	onChange: (string: string) => void;
	value?: string;
}

const StateContext = createContext<RTEState>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

const StateProvider: React.FC<StateProviderProps> = ({ children, defaultValue, onChange, value }) => {
	const defaultState = htmlToEditorState(defaultValue);

	const [internalState, setInternalState] = useState(defaultState);

	const ifMounted = useIfMounted();

	const updateState = useCallback<DraftEditorProps['onChange']>(
		(newEditorState) => {
			setInternalState(newEditorState);

			const html = editorStateToHtml(newEditorState);

			onChange?.(html);
		},
		[onChange]
	);

	const previousValue = usePrevious(value);
	// if state changes from the consumer
	useEffect(() => {
		ifMounted(() => {
			if (typeof value !== 'undefined' && previousValue !== value) {
				const newState = htmlToEditorState(value);
				setInternalState(newState);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const context = useMemo<RTEState>(() => [internalState, updateState], [internalState, updateState]);

	return <Provider value={context}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
