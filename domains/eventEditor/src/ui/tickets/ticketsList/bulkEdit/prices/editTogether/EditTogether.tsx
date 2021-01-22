import { useEffect } from 'react';

import { useAddDefaultPrices, withTPCContext } from '@eventespresso/edtr-services';
import { TicketPriceCalculator } from '@eventespresso/tpc';

import { FooterButtons } from '../buttons';
import useOnSubmitPrices from './useOnSubmitPrices';
import type { EditPricesBaseProps } from '../types';

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
