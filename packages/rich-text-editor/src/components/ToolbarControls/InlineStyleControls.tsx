import React from 'react';

import StyleButton from '../StyleButton';
import { INLINE_STYLES } from '../constants';
import type { InlineStyleControlsProps } from './types';

const InlineStyleControls: React.FC<InlineStyleControlsProps> = ({ editorState, onToggle }) => {
	const currentStyle = editorState.getCurrentInlineStyle();

	return (
		<div className='rich-text-editor-controls'>
			{INLINE_STYLES.map((type) => (
				<StyleButton
					active={currentStyle.has(type.style)}
					aria-label={type['aria-label']}
					key={type.label}
					label={type.label}
					onToggle={onToggle}
					style={type.style}
				/>
			))}
		</div>
	);
};

export default InlineStyleControls;
