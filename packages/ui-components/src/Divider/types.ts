import type { DividerProps as DividerAdapterProps } from '@eventespresso/adapters';
import type { Size } from '../types';

export interface DividerProps extends Omit<DividerAdapterProps, 'size'>, Size {}
