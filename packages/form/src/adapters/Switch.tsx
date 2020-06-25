import React from 'react';

import { Switch } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const SwitchField: React.FC<FieldRendererProps> = ({ input, meta: { error, submitError }, ...rest }) => {
	return <Switch {...input} isChecked={Boolean(input.value)} isInvalid={error || submitError} {...rest} />;
};

export default SwitchField;
