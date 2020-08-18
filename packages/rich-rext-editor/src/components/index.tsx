import React from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

import './style.scss';

export class RichTextEditor extends React.Component {
	focus: () => any;
	onChange: (editorState: any) => void;
	handleKeyCommand: (command: any) => boolean;
	onTab: (e: any) => void;
	toggleBlockType: (type: any) => void;
	toggleInlineStyle: (style: any) => void;

	constructor(props) {
		super(props);

		const rawContent = {
			blocks: [
				{
					text: 'Description',
					type: 'unstyled',
				},
			],
		};

		const blocks = convertFromRaw((props?.input?.value && JSON.parse(props?.input?.value)) || rawContent);

		this.state = {
			editorState: EditorState.createWithContent(blocks),
		};

		// eslint-disable-next-line react/no-string-refs
		this.focus = () => this.refs.editor.focus();

		this.onChange = (editorState) => {
			const content = convertToRaw(editorState.getCurrentContent());

			this.props?.input?.onChange?.(JSON.stringify(content));

			this.setState({ editorState });
		};

		this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.onTab = (e) => this._onTab(e);
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
	}

	_handleKeyCommand(command) {
		const { editorState } = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_onTab(e) {
		const maxDepth = 4;
		this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
	}

	_toggleBlockType(blockType) {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
	}

	_toggleInlineStyle(inlineStyle) {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	}

	render() {
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

		const getBlockStyle = (block) => {
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
				<div className={className} onClick={this.focus}>
					<Editor
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						onTab={this.onTab}
						placeholder='Tell a story...'
						ref='editor'
						spellCheck={true}
					/>
				</div>
			</div>
		);
	}
}
