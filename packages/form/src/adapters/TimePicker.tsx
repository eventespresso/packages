import React from 'react';

import { TimePicker as TimePickerAdapter } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const TimePicker: React.FC<FieldRendererProps> = ({ input: { onChange, ...input }, meta, ...rest }) => {
	return (
		<TimePickerAdapter
			{...input}
			{...rest}
			format='12'
			onChangeValue={onChange}
			// 300 seconds(5 minutes)
			step={300}
		/>
	);
};

export default TimePicker;
