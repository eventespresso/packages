import React from 'react';
import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import type { SelectProps } from './types';

import './style.scss';

const Select: React.FC<SelectProps> = ({ id, ...props }) => {
	const className = classNames('ee-select', props.className);

	return <SelectAdapter {...props} className={className} id={id} />;
};

export default withLabel(Select);
