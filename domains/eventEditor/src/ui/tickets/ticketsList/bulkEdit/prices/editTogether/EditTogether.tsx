import React, { useEffect } from 'react';

import { TicketPriceCalculator, useAddDefaultPrices, withContext as withTPCContext } from '@eventespresso/tpc';

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
