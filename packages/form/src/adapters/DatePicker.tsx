import React from 'react';

import { DatePicker as DatePickerAdapter } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const DatePicker: React.FC<FieldRendererProps> = ({ input: { onChange, ...input }, meta, ...rest }) => {
	return <DatePickerAdapter {...input} {...rest} onChangeValue={onChange} />;
};

export default DatePicker;
