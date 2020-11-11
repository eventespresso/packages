import type { ISpinnerProps } from '@chakra-ui/core';
import type { Size } from '../types';

export interface SpinnerProps extends Omit<ISpinnerProps, 'size'>, Size {}
