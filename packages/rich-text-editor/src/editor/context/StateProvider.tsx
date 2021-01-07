import React, { createContext, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';
// import { convertFromHTML, convertToHTML, IConvertFromHTMLConfig, IConvertToHTMLConfig } from 'draft-convert';

import { DraftEditorProps } from '../ui';

export type RTEState = [state: EditorState, setState: DraftEditorProps['onChange']];

export interface StateProviderProps {
	onChange: (string: string) => void;
	placeholder?: string;
	value?: string;
}

const StateContext = createContext<RTEState>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

// const convertFromConfig: IConvertFromHTMLConfig = {};
// const convertToConfig: IConvertToHTMLConfig = {};

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
	// const defaultValue = EditorState.createWithContent(convertFromHTML(convertFromConfig)(value || placeholder || ''));

	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	/* const updateState = useCallback<DraftEditorProps['onChange']>(
		(newEditorState) => {
			const html = convertToHTML(convertToConfig)(newEditorState.getCurrentContent());

			onChange?.(html);

			setEditorState(newEditorState);
		},
		[onChange]
	); */

	const state = useMemo<RTEState>(() => [editorState, setEditorState], [editorState]);

	return <Provider value={state}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
