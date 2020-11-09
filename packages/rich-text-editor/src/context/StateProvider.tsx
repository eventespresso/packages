import React, { createContext, useCallback, useMemo, useState } from 'react';
import { EditorState } from 'draft-js';
import { convertFromHTML, convertToHTML, IConvertFromHTMLConfig, IConvertToHTMLConfig } from 'draft-convert';

import { DraftEditorProps } from '../components';

export type RTEState = [state: EditorState, setState: DraftEditorProps['onChange']];

export interface StateProviderProps {
	onChange: (string: string) => void;
	placeholder?: string;
	value?: string;
}

const StateContext = createContext<RTEState>(null);

const { Provider, Consumer: StateConsumer } = StateContext;

const convertFromConfig: IConvertFromHTMLConfig = {};
const convertToConfig: IConvertToHTMLConfig = {};

const StateProvider: React.FC<StateProviderProps> = ({ children, onChange, placeholder, value }) => {
	const defaultValue = EditorState.createWithContent(convertFromHTML(convertFromConfig)(value || placeholder || ''));

	const [editorState, setEditorState] = useState(defaultValue);

	const updateState = useCallback<DraftEditorProps['onChange']>(
		(newEditorState) => {
			const html = convertToHTML(convertToConfig)(newEditorState.getCurrentContent());

			onChange?.(html);

			setEditorState(newEditorState);
		},
		[onChange]
	);

	const state = useMemo<RTEState>(() => [editorState, updateState], [editorState, updateState]);

	return <Provider value={state}>{children}</Provider>;
};

export { StateContext, StateProvider, StateConsumer };
