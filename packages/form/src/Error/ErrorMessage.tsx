import React from 'react';

import { ExclamationCircle } from '@eventespresso/icons';
import type { ErrorMessageProps } from './types';

import './style.scss';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, message }) => {
	return message ? (
		<div aria-live='assertive' className='ee-error-message' id={id}>
			<ExclamationCircle />
			<p>{message}</p>
		</div>
	) : null;
};
