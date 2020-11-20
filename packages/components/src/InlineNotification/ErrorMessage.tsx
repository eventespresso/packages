import React from 'react';

import { ExclamationCircle } from '@eventespresso/icons';
import { InlineNotification } from './';

import type { InlineMessageProps } from './types';

export const ErrorMessage: React.FC<InlineMessageProps> = ({ ...props }) => {
	return <InlineNotification {...props} icon={<ExclamationCircle />} type='error' />;
};
