import React from 'react';

import { EditorOl, EditorQuote, EditorUl, IconProps } from '@eventespresso/icons';

import { useBlockType, useToggleBlockType } from '../../hooks';
import StyleButton from '../StyleButton';
import { BLOCK_TYPES } from '../constants';

const iconMapping = {
	Blockquote: EditorQuote,
	OL: EditorOl,
	UL: EditorUl,
};

const BlockStyleControls: React.FC = () => {
	const blockType = useBlockType();

	const onToggle = useToggleBlockType();

	return (
		<div className='rich-text-editor-controls'>
			{BLOCK_TYPES.map(({ label, style }) => {
				const Icon: React.ComponentType<IconProps> = iconMapping?.[label];

				return (
					<StyleButton
						active={style === blockType}
						key={label}
						icon={Icon && <Icon noMargin size='small' />}
						label={label}
						onToggle={onToggle}
						style={style}
					/>
				);
			})}
		</div>
	);
};

export default BlockStyleControls;
