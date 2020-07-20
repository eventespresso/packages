import React from 'react';
import classNames from 'classnames';

import { Select } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import type { SelectInputProps } from './types';

const SelectInput: React.FC<SelectInputProps> = React.memo((props) => {
	const className = classNames('ee-select-input', props.className);
	const id = props.id ? `ee-select-input-${props.id}` : null;

	return <Select className={className} id={id} {...props} />;
});

export default withLabel(SelectInput);
