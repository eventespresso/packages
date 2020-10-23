import React from 'react';

import { FormHelperText, FormHelperTextProps } from '@eventespresso/adapters';

import './style.scss';

export const HelperText: React.FC<FormHelperTextProps> = ({ children, id }) => {
	return children ? (
		<FormHelperText className='ee-form-helper-text' id={id}>
			{children}
		</FormHelperText>
	) : null;
};
