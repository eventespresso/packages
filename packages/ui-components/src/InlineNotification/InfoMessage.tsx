import React from 'react';

import { InfoCircleOutlined } from '@eventespresso/icons';
import { InlineNotification } from './';

import type { InlineMessageProps } from './types';

export const InfoMessage: React.FC<InlineMessageProps> = ({ ...props }) => {
	return <InlineNotification {...props} icon={<InfoCircleOutlined />} type='info' />;
};
