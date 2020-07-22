import React from 'react';

import { withContext as withTPCContext } from '@eventespresso/tpc';
import ContentBody from './ContentBody';
import type { ContentWrapperProps } from './types';
import { useWithEntityFormDetails } from '@eventespresso/components';

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	return useWithEntityFormDetails(
		({ entity }) =>
			withTPCContext(
				ContentBody,
				{
					ticketId: entity.id,
				},
				props
			),
		'NEW_TICKET'
	);
};

export default ContentWrapper;
