import { DraftBlockType } from 'draft-js';

export const BLOCK_TYPES: { label: string; style: DraftBlockType }[] = [
	{ label: 'H1', style: 'header-onesas' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'UL', style: 'unordered-list-item' },
	{ label: 'OL', style: 'ordered-list-item' },
	{ label: 'Code Block', style: 'code-block' },
];

export const INLINE_STYLES = [
	{ label: 'B', style: 'BOLD' },
	{ label: 'I', style: 'ITALIC' },
	{ label: 'U', style: 'UNDERLINE' },
];
