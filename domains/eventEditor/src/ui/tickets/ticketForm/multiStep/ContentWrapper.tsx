import React from 'react';

import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';
import { withContext as withTPCContext } from '@eventespresso/tpc';
import { useWithEntityFormDetails } from '@eventespresso/components';
import ContentBody from './ContentBody';
import type { ContentWrapperProps } from './types';

const WithTPC: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	const Component = withTPCContext(ContentBody, {
		ticketId: values.id,
	});
	return <Component {...props} />;
};
/**
 * This component is inside RFF context, so we can use all of RFF features.
 */
const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	// provide entity details to TAM from edit form
	return useWithEntityFormDetails(({ entity }) => {
		const Component = withTAMContext(WithTPC, {
			assignmentType: 'forTicket',
			entity,
		});
		return <Component {...props} />;
	}, 'NEW_TICKET');
};

export default ContentWrapper;
