import React from 'react';

import { Check } from '@eventespresso/icons';
import { InlineNotification } from './';

import type { InlineMessageProps } from './types';

export const SuccessMessage: React.FC<InlineMessageProps> = ({ ...props }) => {
	return <InlineNotification {...props} icon={<Check />} type='success' />;
};
