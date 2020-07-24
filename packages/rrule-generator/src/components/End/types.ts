import { EndMode } from '../../types';
import { BaseProps } from '../types';

export interface AfterProps extends BaseProps {
	after: number;
	onChange: (after: number) => void;
}

export interface ModeProps extends BaseProps {
	mode: EndMode;
	onChange: (mode: EndMode) => void;
}
