import { useCallback } from 'react';

import { withContext as withTPCContext } from '@eventespresso/tpc';

import type { ContextProviderProps } from './types';
import Modal from './Modal';
import { useDataState } from '../data';

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
	const { tickets } = useDataState();
	const { values } = props.form.getState();

	const getTicket = useCallback((id) => tickets[id], [tickets]);

	const getTicketPrices = useCallback((id) => tickets[id]?.prices || [], [tickets]);

	const Component = withTPCContext(Modal, {
		ticketId: values.id,
		getTicketPrices,
		getTicket,
	});

	return <Component {...props} />;
};

export default ContextProvider;
