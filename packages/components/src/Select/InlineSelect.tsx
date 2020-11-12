import React from 'react';

import { Select as SelectAdapter } from '@eventespresso/adapters';
import { Save } from '@eventespresso/icons';

import { Button, ButtonType } from '../../';
import type { SelectProps } from './types';

import './style.scss';

const InlineSelect: React.FC<SelectProps> = ({ onSubmit, defaultValue, value, ...props }) => {
	const isValueChanged = defaultValue && defaultValue !== value;

	return (
		<div className='ee-select__inline-wrapper'>
			<SelectAdapter value={value} {...props} />
			{isValueChanged && (
				<Button buttonType={ButtonType.PRIMARY} icon={Save} noVerticalMargin onClick={onSubmit} size='small' />
			)}
		</div>
	);
};

export default InlineSelect;
