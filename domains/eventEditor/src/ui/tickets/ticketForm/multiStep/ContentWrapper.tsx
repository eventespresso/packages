import { useWithEntityFormDetails } from '@eventespresso/ee-components';
import { Datetime, Ticket, withTPCContext } from '@eventespresso/edtr-services';
import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';
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
	return useWithEntityFormDetails(({ entity }: { entity: Datetime | Ticket }) => {
		const Component = withTAMContext(WithTPC, {
			assignmentType: 'forTicket',
			entity,
		});
		return <Component {...props} />;
	}, 'NEW_TICKET');
};

export default ContentWrapper;
