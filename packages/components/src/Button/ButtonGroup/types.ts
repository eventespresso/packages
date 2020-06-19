import { ButtonGroupProps as ChakraButtonGroupProps } from '@eventespresso/adapters';
import { ButtonSize } from '../types';

export interface ButtonGroupProps extends ChakraButtonGroupProps {
	buttonSize?: ButtonSize;
}
