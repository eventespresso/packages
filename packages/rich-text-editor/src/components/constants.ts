import { DraftBlockType } from 'draft-js';

export const BLOCK_TYPES: { label: string; style: DraftBlockType }[] = [
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'UL', style: 'unordered-list-item' },
	{ label: 'OL', style: 'ordered-list-item' },
];

export const HEADING_BLOCK_TYPES: { label: string; value: DraftBlockType }[] = [
	{ label: 'H1', value: 'header-onesas' },
	{ label: 'H2', value: 'header-two' },
	{ label: 'H3', value: 'header-three' },
	{ label: 'H4', value: 'header-four' },
	{ label: 'H5', value: 'header-five' },
	{ label: 'H6', value: 'header-six' },
];

export const INLINE_STYLES = [
	{ label: 'B', style: 'BOLD' },
	{ label: 'I', style: 'ITALIC' },
	{ label: 'U', style: 'UNDERLINE' },
];
