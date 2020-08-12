import React from 'react';
import classNames from 'classnames';

import { Select } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import type { SelectInputProps } from './types';

const SelectInput: React.FC<SelectInputProps> = React.memo(({ className, id, ...props }) => {
	const selectClassName = classNames('ee-input-base ee-select', className);
	const selectID = id ? `ee-select-${id}` : null;

	return <Select className={selectClassName} id={selectID} {...props} />;
});

export default withLabel(SelectInput);
