import { EntityCardList } from '@eventespresso/ui-components';
import { useFilteredTicketIds } from '@eventespresso/edtr-services';

import TicketCard from './TicketCard';

const CardView: React.FC = () => {
	const filteredTicketIds = useFilteredTicketIds();

	return <EntityCardList EntityCard={TicketCard} entityIds={filteredTicketIds} />;
};

export default CardView;
