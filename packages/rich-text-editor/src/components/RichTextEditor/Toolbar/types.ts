import type { ToolbarStateReturn } from 'reakit/Toolbar';

export type ToolbarOption =
	| 'inline'
	| 'blockType'
	| 'fontSize'
	| 'fontFamily'
	| 'list'
	| 'textAlign'
	| 'colorPicker'
	| 'link'
	| 'emoji'
	| 'image'
	| 'remove'
	| 'history';

export interface BaseProps {
	className?: string;
	icon?: React.ComponentType;
	title?: string;
}

export interface BaseItemConfig extends BaseProps {}

export type InlineItems = 'bold' | 'italic' | 'underline' | 'strikethrough' | 'monospace' | 'superscript' | 'subscript';

export type BlockTypeItems = 'Normal' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Blockquote' | 'Code';

export type FontSizeItems = number;

export type FontFamilyItems = 'Arial' | 'Georgia' | 'Impact' | 'Tahoma' | 'Times New Roman' | 'Verdana';

export type ListItems = 'unordered' | 'ordered' | 'indent' | 'outdent';

export type TextAlignItems = 'left' | 'center' | 'right' | 'justify';

export type LinkItems = 'link' | 'unlink';

export type HistoryItems = 'undo' | 'redo';

export type ToolbarOptionItems = {
	inline: InlineItems;
	blockType: BlockTypeItems;
	fontSize: FontSizeItems;
	fontFamily: FontFamilyItems;
	list: ListItems;
	textAlign: TextAlignItems;
	colorPicker: never;
	link: LinkItems;
	emoji: never;
	image: never;
	remove: never;
	history: HistoryItems;
};

export type BaseToolbarOptionConfig<K extends string | number> = {
	[T in K]?: BaseItemConfig;
};

export type ToolbarOptionConfig<K extends keyof ToolbarOptionItems> = BaseProps &
	BaseToolbarOptionConfig<ToolbarOptionItems[K]> & {
		component?: React.ComponentType<ToolbarItemProps<K>>;
		items?: Array<ToolbarOptionItems[K]>;
		asDropdown?: boolean;
	};

export type BaseToolBarConfig<Option extends ToolbarOption> = {
	[K in Option]?: ToolbarOptionConfig<K>;
};

export type ToolBarConfig = BaseToolBarConfig<ToolbarOption> & {
	options?: Array<ToolbarOption>;
};

export interface ToolbarProps {
	toolbar?: ToolBarConfig;
}

export interface ToolbarControlProps<Option extends ToolbarOption> {
	config: ToolbarOptionConfig<Option>;
	toolbar: ToolbarStateReturn;
}

export interface ToolbarItemProps<Option extends ToolbarOption> extends ToolbarControlProps<Option> {
	onChange: (key: string | number, value?: any) => void;
	currentValue?: any;
}
