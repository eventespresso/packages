import { TicketPriceCalculator, useSyncTPC2RFF } from '@eventespresso/tpc';

const TPCStep = () => {
	useSyncTPC2RFF();

	return <TicketPriceCalculator context='editTicketForm' />;
};

export default TPCStep;
