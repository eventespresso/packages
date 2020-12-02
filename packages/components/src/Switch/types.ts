import type { withLabelProps } from '../withLabel';
import type { CommonInputProps } from '@eventespresso/adapters/src/types';

interface Icons {
	checked: React.ReactNode;
	unchecked: React.ReactNode;
}

export interface SwitchProps
	extends Partial<withLabelProps>,
		Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value'>,
		CommonInputProps<HTMLInputElement, boolean> {
	'aria-describedby'?: string;
	'aria-labelledby'?: string;
	'aria-label'?: string;
	checked?: boolean;
	className?: string;
	defaultChecked?: boolean;
	disabled?: boolean;
	icons?: boolean | Icons;
	id?: string;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
