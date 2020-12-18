export const toolbar = {
	options: ['inline', 'blockType', 'list'],
	blockType: {
		className: 'ee-rich-text-editor__controls-block-type',
	},
	inline: {
		options: ['bold', 'italic', 'underline'],
		bold: { className: 'ee-rich-text-editor__controls-bold' },
		italic: { className: 'ee-rich-text-editor__controls-italic' },
		underline: { className: 'ee-rich-text-editor__controls-underline' },
	},
	list: {
		options: ['unordered', 'ordered'],
		ordered: { className: 'ee-rich-text-editor__controls-ordered' },
		unordered: { className: 'ee-rich-text-editor__controls-unordered' },
	},
};
