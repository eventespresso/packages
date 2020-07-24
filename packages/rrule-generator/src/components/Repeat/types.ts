import { Frequency } from '../../types';
import { BaseProps, OnChangeInput } from '../types';

export interface FrequencyProps extends BaseProps {
	frequency: Frequency;
	onChange: (frequency: Frequency) => void;
}

export interface OnProps extends BaseProps {
	onChangeMode: OnChangeInput;
	isTheOnlyMode: boolean;
}
