import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';

import { useIfMounted, usePrevious } from '@eventespresso/hooks';

import { DraftEditorProps } from '../components';
import { editorStateToHtml, htmlToEditorState } from '../utils';

export type RTEState = [state: EditorState, setInternalState: DraftEditorProps['onChange']];

export interface StateProviderProps {
	editorState?: EditorState;
	defaultEditorState?: EditorState;
	onChange?: (string: string) => void;
	onChangeEditorState?: (editorState: EditorState) => void;
	value?: string;
	defaultValue?: string;
}

const StateContext = createContext<RTEState>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

const StateProvider: React.FC<StateProviderProps> = ({
	children,
	defaultEditorState,
	defaultValue,
	editorState,
	onChange,
	onChangeEditorState,
	value,
}) => {
	const defaultState = defaultEditorState || htmlToEditorState(defaultValue);

	const [internalState, setInternalState] = useState(defaultState);

	const ifMounted = useIfMounted();

	const updateState = useCallback<DraftEditorProps['onChange']>(
		(newEditorState) => {
			setInternalState(newEditorState);

			onChangeEditorState?.(newEditorState);

			const html = editorStateToHtml(newEditorState);

			onChange?.(html);
		},
		[onChange, onChangeEditorState]
	);

	const previousState = usePrevious(internalState);
	// if state changes from the consumer
	useEffect(() => {
		ifMounted(() => {
			if (typeof editorState !== 'undefined' && previousState !== editorState) {
				setInternalState(editorState);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editorState]);
	useEffect(() => {
		ifMounted(() => {
			if (typeof value !== 'undefined') {
				const newState = htmlToEditorState(value);
				if (previousState !== newState) {
					setInternalState(newState);
				}
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const context = useMemo<RTEState>(() => [internalState, updateState], [internalState, updateState]);

	return <Provider value={context}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
