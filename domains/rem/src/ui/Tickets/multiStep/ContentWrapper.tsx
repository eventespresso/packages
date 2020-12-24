import React from 'react';

import { withContext as withTPCContext } from '@eventespresso/tpc';
import { useWithEntityFormDetails } from '@eventespresso/ee-components';

import ContentBody from './ContentBody';
import type { ContentWrapperProps } from './types';

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	return useWithEntityFormDetails(({ entity }) => {
		const Component = withTPCContext(ContentBody, {
			ticketId: entity.id,
		});
		return <Component {...props} />;
	}, 'NEW_TICKET');
};

export default ContentWrapper;
