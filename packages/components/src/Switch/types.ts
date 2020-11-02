interface Icons {
	checked: React.ReactNode;
	unchecked: React.ReactNode;
}

export interface SwitchProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
	'aria-labelledby': string;
	'aria-label': string;
	checked: boolean;
	className: string;
	defaultChecked: boolean;
	disabled: boolean;
	icons: boolean | Icons;
	id: string;
	name: string;
	onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}
