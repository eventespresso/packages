import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';

import { useIfMounted, usePrevious } from '@eventespresso/hooks';

import { DraftEditorProps } from '../components';
import { editorStateToHtml, htmlToEditorState } from '../utils';

export type RTEState = [state: EditorState, setInternalState: DraftEditorProps['onChange']];

export interface StateProviderProps {
	editorState?: EditorState;
	onChange?: (string: string) => void;
	onChangeEditorState?: (editorState: EditorState) => void;
	value?: string;
}

const StateContext = createContext<RTEState>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

const StateProvider: React.FC<StateProviderProps> = ({
	children,
	editorState,
	onChange,
	onChangeEditorState,
	value,
}) => {
	const defaultValue = editorState || htmlToEditorState(value);

	const [internalState, setInternalState] = useState(defaultValue);

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
			if (previousState !== editorState) {
				setInternalState(editorState);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editorState]);
	useEffect(() => {
		ifMounted(() => {
			const newState = htmlToEditorState(value);
			if (previousState !== newState) {
				setInternalState(newState);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const context = useMemo<RTEState>(() => [internalState, updateState], [internalState, updateState]);

	return <Provider value={context}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
