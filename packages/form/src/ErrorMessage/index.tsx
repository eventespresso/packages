import React from 'react';

import { FormErrorMessage } from '@eventespresso/adapters';

import './style.scss';

interface Props {
	id?: string;
	message?: string;
}

export const ErrorMessage: React.FC<Props> = React.memo(({ id, message }) => {
	return message ? (
		<FormErrorMessage aria-live='assertive' className='ee-form-error-message' id={id}>
			{message}
		</FormErrorMessage>
	) : null;
};
