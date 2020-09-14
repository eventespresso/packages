import React from 'react';

import StyleButton from '../StyleButton';
import { INLINE_STYLES } from '../constants';
import type { InlineStyleControlsProps } from '../types';

const InlineStyleControls: React.FC<InlineStyleControlsProps> = ({ editorState, onToggle }) => {
	const currentStyle = editorState.getCurrentInlineStyle();

	return (
		<div>
			{INLINE_STYLES.map((type) => (
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={onToggle}
					style={type.style}
				/>
			))}
		</div>
	);
};

export default InlineStyleControls;
