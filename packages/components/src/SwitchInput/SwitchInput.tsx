import React from 'react';

import { Switch } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';
import type { SwitchInputProps } from './types';

const SwitchInput: React.FC<SwitchInputProps> = (props) => {
	return <Switch {...props} id={null} />;
};

export default withLabel(SwitchInput);
