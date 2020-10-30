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
	onBlur: (event: React.FocusEvent<HTMLInputElement>) => VoidFunction;
	onChange: VoidFunction;
	onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
	value: string;
}
