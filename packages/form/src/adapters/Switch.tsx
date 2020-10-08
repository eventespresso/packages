import React from 'react';

import { Switch } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const SwitchField: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return <Switch {...input} isChecked={Boolean(input.value)} {...props} />;
};

export default SwitchField;
