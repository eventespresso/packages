import React from 'react';
import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';
import InlineSelect from './InlineSelect';
import type { SelectProps } from './types';

import './style.scss';

const Select: React.FC<SelectProps> = ({ id, type, ...props }) => {
	const className = classNames('ee-select', props.className);

	if (type === 'inline') {
		return <InlineSelect {...props} className={className} id={id} />;
	}

	return <SelectAdapter {...props} className={className} id={id} />;
};

export default withLabel(Select);
