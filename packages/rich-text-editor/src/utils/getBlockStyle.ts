import { ContentBlock, DraftBlockType } from 'draft-js';

export const getBlockStyle = (block: ContentBlock): string | null => {
	const blockType: DraftBlockType = block.getType();

	switch (blockType) {
		case 'blockquote':
			return 'rich-text-editor-blockquote';
		default:
			return null;
	}
};
