import React from 'react';

import { FormErrorMessage as AdapterFormErrorMessage } from '@eventespresso/adapters';
import { ExclamationCircle } from '@eventespresso/icons';
import type { ErrorMessageProps } from './types';

import './style.scss';

export const FormErrorMessage: React.FC<ErrorMessageProps> = ({ id, message }) => {
	return message ? (
		<AdapterFormErrorMessage aria-live='assertive' className='ee-form-error-message' id={id}>
			{message}
		</AdapterFormErrorMessage>
	) : null;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, message }) => {
	return message ? (
		<div aria-live='assertive' className='ee-form-error-message' id={id}>
			<ExclamationCircle />
			<p>{message}</p>
		</div>
	) : null;
};
