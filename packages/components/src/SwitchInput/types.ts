import type { SwitchProps } from '@eventespresso/adapters';

import type { withLabelProps } from '../withLabel';
import type { withTooltipProps } from '../withTooltip';

export interface SwitchInputProps extends SwitchProps, Partial<withLabelProps>, Partial<withTooltipProps> {}
