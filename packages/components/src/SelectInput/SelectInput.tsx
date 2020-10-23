import React from 'react';
import classNames from 'classnames';

import { Select } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import type { SelectInputProps } from './types';

import './style.scss';

const SelectInput: React.FC<SelectInputProps> = ({ id, ...props }) => {
	const className = classNames('ee-select', props.className);

	return <Select {...props} className={className} id={id} />;
};

export default withLabel(SelectInput);
