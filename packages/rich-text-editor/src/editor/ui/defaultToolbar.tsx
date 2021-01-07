import { Link } from '@eventespresso/icons';

const createIcon = (text: string) => () => <>{text}</>;

const bold = createIcon('B');
const italic = createIcon('I');
const underline = createIcon('U');
const strikethrough = createIcon('S');
const monospace = createIcon('{}');
const superscript = createIcon('X²');
const subscript = createIcon('X₂');
const fontSize = createIcon('T');
const unordered = createIcon('UL');
const ordered = createIcon('OL');
const indent = createIcon('Ind');
const outdent = createIcon('Outd');
const left = createIcon('A-L');
const right = createIcon('A-R');
const center = createIcon('A-C');
const justify = createIcon('A-J');
const color = createIcon('C');
const unlink = createIcon('Unlink');
const link = Link;

export const toolbar = {
	options: [
		'inline',
		// 'blockType',
		// 'fontSize',
		// 'fontFamily',
		// 'list',
		// 'textAlign',
		// 'colorPicker',
		'link',
		/* 'embedded',
		'emoji',
		'image',
		'remove',
		'history', */
	],
	inline: {
		inDropdown: false,
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
		bold: { icon: bold, className: undefined, title: undefined },
		italic: { icon: italic, className: undefined, title: undefined },
		underline: { icon: underline, className: undefined, title: undefined },
		strikethrough: {
			icon: strikethrough,
			className: undefined,
			title: undefined,
		},
		monospace: { icon: monospace, className: undefined, title: undefined },
		superscript: { icon: superscript, className: undefined, title: undefined },
		subscript: { icon: subscript, className: undefined, title: undefined },
	},
	blockType: {
		inDropdown: true,
		options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		title: undefined,
	},
	fontSize: {
		icon: fontSize,
		options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		title: undefined,
	},
	fontFamily: {
		options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		title: undefined,
	},
	list: {
		inDropdown: false,
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		options: ['unordered', 'ordered', 'indent', 'outdent'],
		unordered: { icon: unordered, className: undefined, title: undefined },
		ordered: { icon: ordered, className: undefined, title: undefined },
		indent: { icon: indent, className: undefined, title: undefined },
		outdent: { icon: outdent, className: undefined, title: undefined },
		title: undefined,
	},
	textAlign: {
		inDropdown: false,
		className: undefined,
		component: undefined,
		dropdownClassName: undefined,
		options: ['left', 'center', 'right', 'justify'],
		left: { icon: left, className: undefined, title: undefined },
		center: { icon: center, className: undefined, title: undefined },
		right: { icon: right, className: undefined, title: undefined },
		justify: { icon: justify, className: undefined, title: undefined },
		title: undefined,
	},
	colorPicker: {
		icon: color,
		className: undefined,
		component: undefined,
		popupClassName: undefined,
		colors: [
			'rgb(97,189,109)',
			'rgb(26,188,156)',
			'rgb(84,172,210)',
			'rgb(44,130,201)',
			'rgb(147,101,184)',
			'rgb(71,85,119)',
			'rgb(204,204,204)',
			'rgb(65,168,95)',
			'rgb(0,168,133)',
			'rgb(61,142,185)',
			'rgb(41,105,176)',
			'rgb(85,57,130)',
			'rgb(40,50,78)',
			'rgb(0,0,0)',
			'rgb(247,218,100)',
			'rgb(251,160,38)',
			'rgb(235,107,86)',
			'rgb(226,80,65)',
			'rgb(163,143,132)',
			'rgb(239,239,239)',
			'rgb(255,255,255)',
			'rgb(250,197,28)',
			'rgb(243,121,52)',
			'rgb(209,72,65)',
			'rgb(184,49,47)',
			'rgb(124,112,107)',
			'rgb(209,213,216)',
		],
		title: undefined,
	},
	link: {
		inDropdown: false,
		className: undefined,
		component: undefined,
		popupClassName: undefined,
		dropdownClassName: undefined,
		showOpenOptionOnHover: true,
		defaultTargetOption: '_self',
		options: ['link' /* , 'unlink' */],
		link: { icon: link, className: undefined, title: undefined },
		unlink: { icon: unlink, className: undefined, title: undefined },
		linkCallback: undefined,
	},
};

/**
 * - add option property to color-picker, emoji.
 */
