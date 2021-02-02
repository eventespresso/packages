import { __ } from '@eventespresso/i18n';
import { TicketPriceCalculator, SOLD_TICKET_ERROR_MESSAGE } from '@eventespresso/tpc';
import { isLocked } from '@eventespresso/predicates';
import { Banner } from '@eventespresso/ui-components';

import { ContentBodyProps } from './types';

const TPCStep: React.FC<ContentBodyProps> = ({ ticket }) => {
	const isTicketLocked = isLocked(ticket);

	return isTicketLocked ? (
		<Banner description={SOLD_TICKET_ERROR_MESSAGE} status='info' title={__('Editing is disabled')} />
	) : (
		<TicketPriceCalculator context='editTicketForm' />
	);
};

export default TPCStep;
