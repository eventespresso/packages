import React from 'react';

import { Editable } from '@eventespresso/adapters';
import EditableSelect from './EditableSelect';
import Preview from '../Preview';

import type { InlineEditSelectProps } from './types';

import './style.scss';

export const InlineEditSelect: React.FC<InlineEditSelectProps> = ({ onChange, options, value }) => {
	return (
		<Editable className='ee-inline-edit-select'>
			{(props) => (
				<>
					<Preview {...props} value={value} />
					<EditableSelect {...props} onChange={onChange} options={options} value={value} />
				</>
			)}
		</Editable>
	);
};
