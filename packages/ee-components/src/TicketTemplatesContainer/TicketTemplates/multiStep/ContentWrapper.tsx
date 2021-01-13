import { withTPCContext } from '@eventespresso/edtr-services';
import { useWithEntityFormDetails } from '../../../';

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
