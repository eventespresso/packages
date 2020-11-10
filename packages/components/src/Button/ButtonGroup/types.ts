import type { ButtonGroupProps as ChakraButtonGroupProps } from '@eventespresso/adapters';
import type { Size } from '../../';

export interface ButtonGroupProps extends Omit<ChakraButtonGroupProps, 'size'>, Size {}
