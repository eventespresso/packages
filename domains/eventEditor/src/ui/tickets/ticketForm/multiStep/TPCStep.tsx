import { TicketPriceCalculator, useSyncTPCToRFF } from '@eventespresso/tpc';

const TPCStep = () => {
	useSyncTPCToRFF();

	return <TicketPriceCalculator context='editTicketForm' />;
};

export default TPCStep;
