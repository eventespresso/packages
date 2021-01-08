import { CSSProperties, Fragment } from 'react';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import { useToolbarState, Toolbar as ReakitToolbar, ToolbarItem } from 'reakit/Toolbar';
import { Button } from '@eventespresso/ui-components';

import { defaultToolbar } from '../defaultToolbar';
import { useEditorState } from '../../hooks';
import Link from './Link';

const buttonStyle: CSSProperties = {
	marginRight: '0.5em',
	marginLeft: '0.5em',
	paddingRight: '0.5em',
	paddingLeft: '0.5em',
};

const toggleInlineStyle = (style, editorState, onChange) => {
	const newStyle = style === 'monospace' ? 'CODE' : style.toUpperCase();
	let newState = RichUtils.toggleInlineStyle(editorState, newStyle);
	if (style === 'subscript' || style === 'superscript') {
		const removeStyle = style === 'subscript' ? 'SUPERSCRIPT' : 'SUBSCRIPT';
		const contentState = Modifier.removeInlineStyle(
			newState.getCurrentContent(),
			newState.getSelection(),
			removeStyle
		);
		newState = EditorState.push(newState, contentState, 'change-inline-style');
	}
	if (newState) {
		onChange(newState);
	}
};

export const Toolbar = () => {
	const toolbar = useToolbarState({ loop: true });
	const [editorState, updateEditorState] = useEditorState();

	return (
		<ReakitToolbar {...toolbar} aria-label='RTE Toolbar'>
			{defaultToolbar.options.map((option) => {
				const config = defaultToolbar?.[option];
				return (
					<Fragment key={option}>
						{(config?.items as string[])?.map((item) => {
							const itemConfig = config?.[item];

							const Icon = itemConfig?.icon;

							return (
								<ToolbarItem
									{...toolbar}
									style={buttonStyle}
									key={item}
									// as={Button}
									as={option === 'link' ? (Link as any) : Button}
									// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
									onClick={() => {
										if (option === 'inline') {
											toggleInlineStyle(item, editorState, updateEditorState);
										}
									}}
									size='small'
									variant='outline'
								>
									{(Icon && <Icon />) || item}
								</ToolbarItem>
							);
						})}
					</Fragment>
				);
			})}
		</ReakitToolbar>
	);
};

export default Toolbar;
