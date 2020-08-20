import React from 'react';

import { useWithEntityFormDetails } from '@eventespresso/form';
import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';
import type { ContentWrapperProps } from './types';
import ContentBody from './ContentBody';

/**
 * This component is inside RFF context, so we can use all of RFF features.
 */
const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	// provide entity details to TAM from edit form
	return useWithEntityFormDetails(({ entity }) => {
		const Component = withTAMContext(ContentBody, {
			assignmentType: 'forDate',
			entity,
		});
		return <Component {...props} />;
	}, 'NEW_DATE');
};

export default ContentWrapper;
