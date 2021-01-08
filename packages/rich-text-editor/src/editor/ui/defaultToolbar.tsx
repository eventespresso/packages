import { Link } from '@eventespresso/icons';
import { ToolBarConfig } from './types';

const createIcon = (text: string) => () => <>{text}</>;

// TODO replace these with real icons
const bold = createIcon('B');
const italic = createIcon('I');
const underline = createIcon('U');
const strikethrough = createIcon('S');
const monospace = createIcon('{}');
const superscript = createIcon('X²');
const subscript = createIcon('X₂');
const unordered = createIcon('UL');
const ordered = createIcon('OL');
const indent = createIcon('Ind');
const outdent = createIcon('Outd');
const left = createIcon('A-L');
const right = createIcon('A-R');
const center = createIcon('A-C');
const justify = createIcon('A-J');
const unlink = createIcon('Unlink');
const link = Link;

export const defaultToolbar: ToolBarConfig = {
	options: [
		'inline',
		'blockType',
		// 'fontSize',
		// 'fontFamily',
		// 'list',
		// 'textAlign',
		// 'colorPicker',
		// 'link',
		// 'emoji',
		// 'image',
		// 'remove',
		// 'history',
	],
	inline: {
		items: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
		bold: { icon: bold },
		italic: { icon: italic },
		underline: { icon: underline },
		strikethrough: {
			icon: strikethrough,
		},
		monospace: { icon: monospace },
		superscript: { icon: superscript },
		subscript: { icon: subscript },
	},
	blockType: {
		asDropdown: true,
		items: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
	},
	fontSize: {
		asDropdown: true,
		items: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
	},
	fontFamily: {
		asDropdown: true,
		items: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
	},
	list: {
		items: ['unordered', 'ordered', 'indent', 'outdent'],
		unordered: { icon: unordered },
		ordered: { icon: ordered },
		indent: { icon: indent },
		outdent: { icon: outdent },
	},
	textAlign: {
		items: ['left', 'center', 'right', 'justify'],
		left: { icon: left },
		center: { icon: center },
		right: { icon: right },
		justify: { icon: justify },
	},
	link: {
		items: ['link', 'unlink'],
		link: { icon: link },
		unlink: { icon: unlink },
	},
};
