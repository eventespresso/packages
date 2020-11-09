import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import { Editor, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { __ } from '@eventespresso/i18n';

import ToolbarControls from '../ToolbarControls';
import { DraftEditorProps, RichTextEditorProps } from './types';
import { isTabKey } from '../../../../utils/src/keycodes';
import { getBlockStyle } from '../../utils';

import './style.scss';
import DebugLog from './DebugLog';
import { withState } from '../../context';
import { useEditorState } from '../../hooks';

// Custom overrides for "code" style.
const styleMap = {
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 16,
		padding: 2,
	},
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ 'aria-label': ariaLabel, className, type }) => {
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

	const keyBindingFn = useCallback<DraftEditorProps['keyBindingFn']>((e) => {
		if (isTabKey(e as React.KeyboardEvent) && KeyBindingUtil.hasCommandModifier(e)) {
			return 'tab';
		}

		return getDefaultKeyBinding(e);
	}, []);

	const editorClassName = classNames('rich-text-editor', className);

	return (
		<>
			<div className='rich-text-editor-root'>
				<ToolbarControls type={type} />
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
							onChange={updateEditorState}
							placeholder={__('Write something…')}
							ref={editorRef}
							spellCheck={true}
						/>
					</div>
				}
			</div>
			<DebugLog editorState={editorState} />
		</>
	);
};

export default withState(RichTextEditor);
