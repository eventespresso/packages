import React from 'react';
import classNames from 'classnames';

import { ExclamationCircle } from '@eventespresso/icons';
import { Collapsible } from '../';

import type { ErrorMessageProps } from './types';

import './style.scss';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, message, variant }) => {
	const className = classNames('ee-error-message', variant && `ee-error-message--variant-${variant}`);

	return (
		<Collapsible show={Boolean(message?.length)}>
			<div aria-live='polite' className={className} id={id}>
				<ExclamationCircle />
				<p>{message}</p>
			</div>
		</Collapsible>
	);
};
