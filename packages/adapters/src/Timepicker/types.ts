import type { TimePickerProps as BaseUITimePickerProps } from 'baseui/timepicker';

import { CommonInputProps } from '../types';

export interface TimepickerProps extends BaseUITimePickerProps, CommonInputProps<HTMLInputElement, Date> {
  className?: string;
  value?: Date;
}
