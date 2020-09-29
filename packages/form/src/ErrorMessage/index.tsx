import React from 'react';

import { FormErrorMessage } from '@eventespresso/adapters';

import './style.scss';

interface Props {
	message?: string;
}

export const ErrorMessage: React.FC<Props> = React.memo(({ message }) => {
	return message ? (
		<FormErrorMessage aria-live='assertive' className='ee-form-error-message'>
			{message}
		</FormErrorMessage>
	) : null;
});
