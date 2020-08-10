import React from 'react';

import { TimePicker as TimePickerAdapter } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const TimePicker: React.FC<FieldRendererProps> = ({ input: { onChange, ...input }, meta, ...rest }) => {
	return <TimePickerAdapter {...input} {...rest} onChangeValue={onChange} />;
};

export default TimePicker;
