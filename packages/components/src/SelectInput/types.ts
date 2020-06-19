import { SelectProps } from '@eventespresso/adapters';
import { withLabelProps, withTooltipProps } from '../../';

export interface SelectInputProps extends SelectProps, Partial<withLabelProps>, Partial<withTooltipProps> {}
