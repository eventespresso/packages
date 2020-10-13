import { DraftBlockType } from 'draft-js';
import { __ } from '@eventespresso/i18n';

interface Block {
	'aria-label'?: string;
	label: string;
	style?: DraftBlockType;
	value?: DraftBlockType;
}

export const BLOCK_TYPES: Block[] = [
	{ 'aria-label': __('blockquote'), label: 'Blockquote', style: 'blockquote' },
	{ 'aria-label': __('unordered list'), label: 'UL', style: 'unordered-list-item' },
	{ 'aria-label': __('ordered list'), label: 'OL', style: 'ordered-list-item' },
];

export const HEADING_BLOCK_TYPES: Block[] = [
	{ label: 'H1', value: 'header-one' },
	{ label: 'H2', value: 'header-two' },
	{ label: 'H3', value: 'header-three' },
	{ label: 'H4', value: 'header-four' },
	{ label: 'H5', value: 'header-five' },
	{ label: 'H6', value: 'header-six' },
];

export const INLINE_STYLES: Block[] = [
	{ 'aria-label': __('bold'), label: 'B', style: 'BOLD' },
	{ 'aria-label': __('italic'), label: 'I', style: 'ITALIC' },
	{ 'aria-label': __('underline'), label: 'U', style: 'UNDERLINE' },
];
