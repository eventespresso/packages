import type { ButtonGroupProps as ChakraButtonGroupProps } from '@eventespresso/adapters';
import type { ButtonSize } from '../types';

export interface ButtonGroupProps extends ChakraButtonGroupProps {
	buttonSize?: ButtonSize;
}
