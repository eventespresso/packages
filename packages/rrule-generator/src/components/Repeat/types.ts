import { Frequency } from '../../types';
import { BaseProps } from '../types';

export interface FrequencyProps extends BaseProps {
	frequency: Frequency;
	onChange: (frequency: Frequency) => void;
}
