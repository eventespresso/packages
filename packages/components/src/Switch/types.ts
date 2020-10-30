interface Icons {
	checked: React.ReactNode;
	unchecked: React.ReactNode;
}

export interface SwitchProps {
	'aria-labelledby': string;
	'aria-label': string;
	checked: boolean;
	className: string;
	defaultChecked: boolean;
	disabled: boolean;
	icons: boolean | Icons;
	id: string;
	name: string;
	onBlur: VoidFunction;
	onChange: VoidFunction;
	onFocus: VoidFunction;
	value: string;
}
