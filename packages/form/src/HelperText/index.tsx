import React from 'react';

import { FormHelperText } from '../adapters';
import type { FormHelperTextProps } from '../adapters';

import './style.scss';

export const HelperText: React.FC<FormHelperTextProps> = ({ children, id }) => (
	<FormHelperText className='ee-form-helper-text' id={id}>
		{children}
	</FormHelperText>
);
