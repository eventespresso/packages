import React from 'react';

import { Select } from '@eventespresso/adapters';
import { withLabel } from '../../';

import { SelectInputProps } from './types';

const SelectInput: React.FC<SelectInputProps> = React.memo(({ id, ...rest }) => {
	const htmlId = id ? `ee-select-input-${id}` : null;

	return <Select id={htmlId} {...rest} />;
});

export default withLabel(SelectInput);
