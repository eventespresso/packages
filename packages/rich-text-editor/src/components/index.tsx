/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Editor, EditorState, RichUtils, DraftBlockType } from 'draft-js';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import 'draft-js/dist/Draft.css';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

import { RichTextEditorProps, RichTextEditorState } from './types';

import './style.scss';

type SyntheticKeyboardEvent = React.KeyboardEvent<{ any }>;

export class RichTextEditor extends React.Component<RichTextEditorProps, RichTextEditorState> {
	focus: () => void;
	onChange: (editorState: EditorState) => void;
	toggleInlineStyle: (style: any) => any;
	toggleBlockType: (type: any) => any;
	onTab: (e: any) => void;
	handleKeyCommand: (command: any) => any;

	constructor(props: RichTextEditorProps) {
		super(props);

		const markup = '<b>Edit ...</b>';

		const editorState = EditorState.createWithContent(
			// @ts-ignore
			convertFromHTML((props?.input?.value.length && props?.input?.value) || markup)
		);

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

			// @ts-ignore
			this.props?.input?.onChange?.(html);

			this.setState({ editorState });
		};

		this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.onTab = (e) => this._onTab(e);
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

		return 'not-handled';
	}

	_onTab(e: SyntheticKeyboardEvent): void {
		const maxDepth = 4;
		this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
	}

	_toggleBlockType(blockType: DraftBlockType): any {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
	}

	_toggleInlineStyle(inlineStyle: string): any {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	}

	render(): JSX.Element {
		const { editorState } = this.state;

		// If the user changes block type before entering any text, we can
		// either style the placeholder or hide it. Let's just hide it now.
		let className = 'RichEditor-editor';
		const contentState = editorState.getCurrentContent();

		if (!contentState?.hasText()) {
			if (contentState?.getBlockMap?.().first?.().getType?.() !== 'unstyled') {
				className += ' RichEditor-hidePlaceholder';
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

		const getBlockStyle = (block: { getType: () => any }) => {
			switch (block.getType()) {
				case 'blockquote':
					return 'RichEditor-blockquote';
				default:
					return null;
			}
		};

		return (
			<div className='RichEditor-root'>
				<BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
				<InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
				{
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events
					<div className={className} onClick={this.focus}>
						<Editor
							blockStyleFn={getBlockStyle}
							customStyleMap={styleMap}
							editorState={editorState}
							handleKeyCommand={this.handleKeyCommand}
							onChange={this.onChange}
							onTab={this.onTab}
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
