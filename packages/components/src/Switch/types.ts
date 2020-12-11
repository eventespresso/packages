import type { SwitchProps as SwitchAdapterProps } from '@eventespresso/adapters';
import type { withLabelProps } from '../withLabel';
import type { withDebounceProps } from '../withDebounce';

export interface SwitchProps extends Partial<withLabelProps>, SwitchAdapterProps, withDebounceProps {}
