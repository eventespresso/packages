import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Editor, EditorProps } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';

import { RichTextEditorProps } from './types';
import { editorStateToHtml, htmlToEditorState } from '../../utils';

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
	className,
	defaultValue,
	onChange,
	onChangeValue,
	placeholder,
	value,
	...props
}) => {
	const editorClassName = classNames('ee-rich-text-editor', className);

	const wrapperClassName = classNames('ee-rich-text-editor__root', props.wrapperClassName);

	const editorState = useMemo(() => htmlToEditorState(value || placeholder), [placeholder, value]);

	const defaultEditorState = useMemo(() => htmlToEditorState(defaultValue), [defaultValue]);

	const onEditorStateChange = useCallback<EditorProps['onEditorStateChange']>(
		(newEditorState) => {
			const html = editorStateToHtml(newEditorState);
			onChange?.(html);
			onChangeValue?.(html);
		},
		[onChange, onChangeValue]
	);

	/**
	 * `react-draft-wysiwyg` uses Object.hasProperty() check to decide controlled/uncontrolled state,
	 * it considers the state to be controlled even if it's undefined ¯\_(ツ)_/¯
	 * So, we will only pass the state props if they are defined
	 */
	const editorProps = useMemo(() => {
		const stateProps: Partial<EditorProps> = {};
		if (typeof editorState !== 'undefined') {
			stateProps.editorState = editorState;
		}
		if (typeof defaultEditorState !== 'undefined') {
			stateProps.defaultEditorState = defaultEditorState;
		}
		return stateProps;
	}, [defaultEditorState, editorState]);

	return (
		<Editor
			{...props}
			{...editorProps}
			editorClassName={editorClassName}
			onEditorStateChange={onEditorStateChange}
			toolbarClassName='ee-rich-text-editor__toolbar'
			wrapperClassName={wrapperClassName}
		/>
	);
};
