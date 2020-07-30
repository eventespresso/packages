import { Frequency } from '../../types';
import { BaseProps, OnChangeInput, OnChangeSelect } from '../types';

export interface FrequencyProps extends BaseProps {
	frequency: Frequency;
	onChange: (frequency: Frequency) => void;
}

export interface OnProps extends BaseProps {
	onChangeMode: OnChangeInput;
	isTheOnlyMode: boolean;
}

export interface PositionSelectProps {
	'aria-label': string;
	id: string;
	isActive: boolean;
	name: string;
	onChangeWhich: OnChangeSelect;
	value: string;
}
