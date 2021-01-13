import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import { Editor, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { blockRenderMap, getCustomStyleMap } from 'draftjs-utils';
import 'draft-js/dist/Draft.css';

import { __ } from '@eventespresso/i18n';
import { isTabKey } from '@eventespresso/utils';

import { Toolbar } from './Toolbar';
import { DraftEditorProps, RichTextEditorProps } from './types';
import { getBlockStyle } from '../../utils';
import blockRenderer from './render';

import { WithEditMode } from '../WithEditMode';
import { withState } from '../../context';
import { useEditorState } from '../../hooks';

import './style.scss';

// Custom overrides for "code" style.
const styleMap = {
	...getCustomStyleMap(),
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 16,
		padding: 2,
	},
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
	'aria-label': ariaLabel,
	className,
	enableEditMode,
	toolbar,
}) => {
	const [editorState, updateEditorState] = useEditorState();

	const editorRef = useRef<Editor>();

	const handleKeyCommand = useCallback<DraftEditorProps['handleKeyCommand']>(
		(command) => {
			const newState = RichUtils.handleKeyCommand(editorState, command);

			if (newState) {
				updateEditorState(newState);
				return 'handled';
			}

			if (command === 'tab') {
				const maxDepth = 4;
				updateEditorState(RichUtils.onTab(null, editorState, maxDepth));
				return 'handled';
			}

			return 'not-handled';
		},
		[editorState, updateEditorState]
	);

	/**
	 * A function that accepts a synthetic key event and returns the matching DraftEditorCommand constant,
	 * or null if no command should be invoked.
	 */
	const keyBindingFn = useCallback<DraftEditorProps['keyBindingFn']>((e) => {
		if (isTabKey(e as any) && KeyBindingUtil.hasCommandModifier(e)) {
			return 'tab';
		}

		return getDefaultKeyBinding(e);
	}, []);

	const editorClassName = classNames('ee-rich-text-editor', className);

	const visualEditor = (
		<>
			<Toolbar toolbar={toolbar} />
			<div className={editorClassName}>
				<Editor
					ariaLabel={ariaLabel}
					blockRenderMap={blockRenderMap}
					blockRendererFn={blockRenderer}
					blockStyleFn={getBlockStyle}
					customStyleMap={styleMap}
					editorState={editorState}
					handleKeyCommand={handleKeyCommand}
					keyBindingFn={keyBindingFn}
					onChange={updateEditorState}
					placeholder={__('Write something…')}
					ref={editorRef}
					spellCheck={true}
				/>
			</div>
		</>
	);

	return (
		<div className='ee-rich-text-editor-root'>
			{enableEditMode ? <WithEditMode visualEditor={visualEditor} /> : visualEditor}
		</div>
	);
};

export default withState(RichTextEditor);
