import React from 'react';

import { FormErrorMessage } from '../adapters';
import type { ErrorMessageProps } from './types';

import './style.scss';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, message }) => {
	return message ? (
		<FormErrorMessage aria-live='assertive' className='ee-form-error-message' id={id}>
			{message}
		</FormErrorMessage>
	) : null;
};
