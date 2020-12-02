import React from 'react';
import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';
import { ArrowDownAlt } from '@eventespresso/icons';
import { withLabel } from '../withLabel';
import InlineSelect from './InlineSelect';
import type { SelectProps } from './types';

import './style.scss';

const rootProps = { className: 'ee-select-wrapper' };

const Select: React.FC<SelectProps> = ({ id, type, ...props }) => {
	const className = classNames('ee-select', props.className);

	if (type === 'inline') {
		return <InlineSelect {...props} className={className} id={id} rootProps={rootProps} />;
	}

	return <SelectAdapter {...props} className={className} icon={<ArrowDownAlt />} id={id} rootProps={rootProps} />;
};

export default withLabel(Select);
