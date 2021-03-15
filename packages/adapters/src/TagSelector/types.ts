export interface TagSelectorProps {
	className?: string;
	comboBoxClassName?: string;
	defaultValue?: Array<string>;
	items: Array<string>;
	listClassName?: string;
	onChange?: (newValue: Array<string>) => void;
	SelectedItem?: React.ComponentType<{ onRemove?: VoidFunction }>;
	toggleClassName?: string;
	value?: Array<string>;
}
