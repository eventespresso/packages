/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Editor, EditorState, RichUtils, DraftBlockType, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import { TAB } from '@wordpress/keycodes';
import 'draft-js/dist/Draft.css';

import ToolbarControls from './ToolbarControls';

import { getBlockStyle } from '../utils';
import { RichTextEditorProps, RichTextEditorState } from './types';

import './style.scss';

const { hasCommandModifier } = KeyBindingUtil;

type SyntheticKeyboardEvent = React.KeyboardEvent<{ any }>;

export class RichTextEditor extends React.Component<RichTextEditorProps, RichTextEditorState> {
	focus: () => void;
	onChange: (editorState: EditorState) => void;
	toggleInlineStyle: (style: any) => any;
	toggleBlockType: (type: any) => any;
	handleKeyCommand: (command: any) => any;

	constructor(props: RichTextEditorProps) {
		super(props);

		const markup = props?.placeholder ? props.placeholder : '';

		const value = props?.input?.value?.length ? props?.input?.value : props?.value;

		const editorState = EditorState.createWithContent(convertFromHTML(value || markup));

		this.state = {
			editorState,
		};

		this.focus = () => {
			// eslint-disable-next-line react/no-string-refs
			const { editor } = this.refs;

			// @ts-ignore
			editor.focus();
		};

		this.onChange = (editorState) => {
			const html = convertToHTML(editorState.getCurrentContent());

			const onChange = this.props?.input?.onChange || this.props?.onChange;

			onChange?.(html);

			this.setState({ editorState });
		};

		this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
	}

	_handleKeyCommand(command: string): any {
		const { editorState } = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);

		if (newState) {
			this.onChange(newState);
			return 'handled';
		}

		if (command === 'tab') {
			const maxDepth = 4;
			this.onChange(RichUtils.onTab(null, this.state.editorState, maxDepth));
			return 'handled';
		}

		return 'not-handled';
	}

	keyBindingFn(e: SyntheticKeyboardEvent): string | null {
		if (e.keyCode === TAB && hasCommandModifier(e)) {
			return 'tab';
		}

		return getDefaultKeyBinding(e);
	}

	_toggleBlockType(blockType: DraftBlockType): void {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
	}

	_toggleInlineStyle(inlineStyle: string): void {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	}

	render(): JSX.Element {
		const { editorState } = this.state;

		// If the user changes block type before entering any text, we can
		// either style the placeholder or hide it. Let's just hide it now.
		let className = 'rich-text-editor';
		const contentState = editorState.getCurrentContent();

		if (!contentState?.hasText()) {
			if (contentState?.getBlockMap?.().first?.().getType?.() !== 'unstyled') {
				className += ' rich-text-editor--hidePlaceholder';
			}
		}

		// Custom overrides for "code" style.
		const styleMap = {
			CODE: {
				backgroundColor: 'rgba(0, 0, 0, 0.05)',
				fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
				fontSize: 16,
				padding: 2,
			},
		};

		return (
			<div className='rich-text-editor-root'>
				<ToolbarControls
					editorState={editorState}
					onToggleBlockType={this.toggleBlockType}
					onToggleInlineStyle={this.toggleInlineStyle}
				/>
				{
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events
					<div className={className} onClick={this.focus}>
						<Editor
							blockStyleFn={getBlockStyle}
							customStyleMap={styleMap}
							editorState={editorState}
							handleKeyCommand={this.handleKeyCommand}
							keyBindingFn={this.keyBindingFn}
							onChange={this.onChange}
							placeholder='Write something...'
							// eslint-disable-next-line react/no-string-refs
							ref='editor'
							spellCheck={true}
						/>
					</div>
				}
			</div>
		);
	}
}
