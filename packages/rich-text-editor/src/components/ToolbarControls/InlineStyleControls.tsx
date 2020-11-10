import React, { useCallback } from 'react';
import { RichUtils } from 'draft-js';

import { Strikethrough } from '@eventespresso/icons';
import StyleButton from '../StyleButton';
import { INLINE_STYLES } from '../constants';
import { useEditorState } from '../../hooks';

const iconMapping = {
	S: Strikethrough,
};
const InlineStyleControls: React.FC = () => {
	const [editorState, updateEditorState] = useEditorState();
	const currentStyle = editorState.getCurrentInlineStyle();

	const onToggle = useCallback(
		(inlineStyle: string): void => {
			updateEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
		},
		[editorState, updateEditorState]
	);

	return (
		<div className='ee-rich-text-editor-controls'>
			{INLINE_STYLES.map((type) => {
				const Icon = iconMapping?.[type.label];

				return (
					<StyleButton
						active={currentStyle.has(type.style)}
						aria-label={type['aria-label']}
						icon={Icon && <Icon noMargin size='small' />}
						key={type.label}
						label={type.label}
						onToggle={onToggle}
						style={type.style}
					/>
				);
			})}
		</div>
	);
};

export default InlineStyleControls;
