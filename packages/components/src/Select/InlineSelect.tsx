import React from 'react';
import classNames from 'classnames';

import { Select as SelectAdapter } from '@eventespresso/adapters';

import type { SelectProps } from './types';
import { withDebounce } from '../withDebounce';

import './style.scss';

const InlineSelect: React.FC<SelectProps> = ({ rootProps, ...props }) => {
	const className = classNames('ee-select--inline', props.className);
	rootProps.className = classNames('ee-select-wrapper--inline', rootProps.className);
	return <SelectAdapter {...props} className={className} rootProps={rootProps} />;
};

export default withDebounce(InlineSelect);
