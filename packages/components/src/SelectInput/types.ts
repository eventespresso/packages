import type { SelectProps } from '@eventespresso/adapters';
import type { withLabelProps, withTooltipProps } from '../../';

export interface SelectInputProps extends SelectProps, Partial<withLabelProps>, Partial<withTooltipProps> {}
