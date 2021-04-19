import { useTickets } from '@eventespresso/edtr-services';
import { EntityCacheIds } from '@eventespresso/ee-components';

import { NewTicketButton } from './newTicketOptions';
import { Actions } from './actions';

const TicketsListFooter: React.FC = () => {
	const entities = useTickets();

	return (
		<>
			<EntityCacheIds entities={entities} />
			<NewTicketButton />
			<Actions />
		</>
	);
};

export default TicketsListFooter;
