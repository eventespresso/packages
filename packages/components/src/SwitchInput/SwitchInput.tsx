import React from 'react';

import { Switch, SwitchProps } from '@eventespresso/adapters';
import { withLabel, withLabelProps } from '../withLabel';
import type { withTooltipProps } from '../withTooltip';

interface SwitchInputProps extends SwitchProps, Partial<withLabelProps>, Partial<withTooltipProps> {}

const SwitchInput: React.FC<SwitchInputProps> = React.memo((props) => {
	return <Switch {...props} />;
});

export default withLabel(SwitchInput);
