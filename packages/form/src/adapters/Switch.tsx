import React from 'react';

import { Switch } from '../../../components/src/Switch';
import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const SwitchField: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return <Switch {...input} checked={Boolean(input.value)} {...props} />;
};

export default withoutMetaProp(SwitchField);
