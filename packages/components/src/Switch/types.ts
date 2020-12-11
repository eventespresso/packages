import type { SwitchProps as SwitchAdapterProps } from '@eventespresso/adapters';
import type { withLabelProps } from '../withLabel';

export interface SwitchProps extends Partial<withLabelProps>, SwitchAdapterProps {}
