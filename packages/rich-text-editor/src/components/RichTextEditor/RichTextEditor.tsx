import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import { Editor, EditorState, RichUtils, DraftBlockType, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import 'draft-js/dist/Draft.css';

import { __ } from '@eventespresso/i18n';

import ToolbarControls from '../ToolbarControls';
import { RichTextEditorProps } from './types';
import { isTabKey } from '../../../../utils/src/keycodes';
import { getBlockStyle } from '../../utils';

import './style.scss';

// Custom overrides for "code" style.
const styleMap = {
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 16,
		padding: 2,
	},
};

type DraftEditorProps = React.ComponentProps<typeof Editor>;

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
	'aria-label': ariaLabel,
	className,
	placeholder,
	onChange,
	type,
	value,
}) => {
	const defaultValue = EditorState.createWithContent(convertFromHTML({})(value || placeholder || ''));

	const [editorState, setEditorState] = useState(defaultValue);

	const editorRef = useRef<Editor>();

	const onChangeHandler = useCallback<DraftEditorProps['onChange']>(
		(newEditorState) => {
			const html = convertToHTML({})(newEditorState.getCurrentContent());

			onChange?.(html);

			setEditorState(newEditorState);
		},
		[onChange]
	);

	const handleKeyCommand = useCallback<DraftEditorProps['handleKeyCommand']>(
		(command) => {
			const newState = RichUtils.handleKeyCommand(editorState, command);

			if (newState) {
				onChangeHandler(newState);
				return 'handled';
			}

			if (command === 'tab') {
				const maxDepth = 4;
				onChangeHandler(RichUtils.onTab(null, editorState, maxDepth));
				return 'handled';
			}

			return 'not-handled';
		},
		[editorState, onChangeHandler]
	);

	const keyBindingFn = useCallback<DraftEditorProps['keyBindingFn']>((e) => {
		if (isTabKey(e as React.KeyboardEvent) && KeyBindingUtil.hasCommandModifier(e)) {
			return 'tab';
		}

		return getDefaultKeyBinding(e);
	}, []);

	const toggleBlockType = useCallback(
		(blockType: DraftBlockType): void => {
			onChangeHandler(RichUtils.toggleBlockType(editorState, blockType));
		},
		[editorState, onChangeHandler]
	);

	const toggleInlineStyle = useCallback(
		(inlineStyle: string): void => {
			onChangeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
		},
		[editorState, onChangeHandler]
	);

	const editorClassName = classNames('rich-text-editor', className);

	return (
		<div className='rich-text-editor-root'>
			<ToolbarControls
				type={type}
				editorState={editorState}
				onToggleBlockType={toggleBlockType}
				onToggleInlineStyle={toggleInlineStyle}
			/>
			{
				// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
				<div className={editorClassName} onClick={editorRef.current?.focus}>
					<Editor
						ariaLabel={ariaLabel}
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={handleKeyCommand}
						keyBindingFn={keyBindingFn}
						onChange={onChangeHandler}
						placeholder={__('Write something…')}
						ref={editorRef}
						spellCheck={true}
					/>
				</div>
			}
		</div>
	);
};
