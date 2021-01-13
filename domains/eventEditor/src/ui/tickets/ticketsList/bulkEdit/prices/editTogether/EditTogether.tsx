import { useEffect } from 'react';

import { TicketPriceCalculator, useAddDefaultPrices } from '@eventespresso/tpc';
import { withTPCContext } from '@eventespresso/edtr-services';

import { FooterButtons } from '../buttons';
import { EditPricesBaseProps } from '../types';
import useOnSubmitPrices from './useOnSubmitPrices';

const EditTogether: React.FC<EditPricesBaseProps> = ({ onClose }) => {
	const addDefaultPrices = useAddDefaultPrices();
	// add default prices on mount
	useEffect(() => {
		addDefaultPrices();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = useOnSubmitPrices(onClose);

	return (
		<>
			<TicketPriceCalculator />
			<FooterButtons onSubmit={onSubmit} onReset={addDefaultPrices} />
		</>
	);
};

export default withTPCContext(EditTogether, { ticketId: '' });
