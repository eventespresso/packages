import React from 'react';

import { Select as SelectAdapter } from '@eventespresso/adapters';

import type { SelectProps } from './types';
import { withDebounce } from '../withDebounce';

import './style.scss';

const InlineSelect: React.FC<SelectProps> = (props) => {
	return (
		<div className='ee-select__inline-wrapper'>
			<SelectAdapter {...props} />
		</div>
	);
};

export default withDebounce(InlineSelect);
