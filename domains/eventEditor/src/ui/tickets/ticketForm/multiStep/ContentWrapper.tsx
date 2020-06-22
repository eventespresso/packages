import React from 'react';

import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';
import { withContext as withTPCContext } from '@edtrUI/tickets/ticketPriceCalculator/context';
import ContentBody from './ContentBody';
import { ContentWrapperProps } from './types';
import { useWithEntityFormDetails } from '@eventespresso/components';

const WithTPC: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();
	return withTPCContext(
		ContentBody,
		{
			ticketId: values.id,
		},
		props
	);
};
/**
 * This component is inside RFF context, so we can use all of RFF features.
 */
const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	// provide entity details to TAM from edit form
	return useWithEntityFormDetails(
		({ entity }) =>
			withTAMContext(
				WithTPC,
				{
					assignmentType: 'forTicket',
					entity,
				},
				props
			),
		'NEW_TICKET'
	);
};

export default ContentWrapper;
