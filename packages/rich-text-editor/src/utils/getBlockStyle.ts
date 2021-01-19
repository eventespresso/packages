import { ContentBlock, DraftBlockType } from 'draft-js';

export const getBlockStyle = (block: ContentBlock): string | null => {
	const textAlign = block?.getData()?.get('text-align');

	if (textAlign) {
		return `ee-rich-text-editor--align-${textAlign}`;
	}

	const blockType: DraftBlockType = block.getType();

	switch (blockType) {
		case 'blockquote':
			return 'ee-rich-text-editor-blockquote';
	}
	return '';
};
