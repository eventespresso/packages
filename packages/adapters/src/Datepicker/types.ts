import type { DatepickerProps as BaseUIDatepickerProps } from 'baseui/datepicker';

import { CommonInputProps } from '../types';

export interface DatepickerProps extends BaseUIDatepickerProps, CommonInputProps<HTMLInputElement, Date> {
  className?: string;
  value?: Date;
}
