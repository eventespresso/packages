import React from 'react';
import classNames from 'classnames';

import { Select } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import type { SelectInputProps } from './types';

const SelectInput: React.FC<SelectInputProps> = ({ className, id, ...props }) => {
	const selectClassName = classNames('ee-select ee-input-base', className);

	return <Select className={selectClassName} id={id} {...props} />;
};

export default withLabel(SelectInput);
