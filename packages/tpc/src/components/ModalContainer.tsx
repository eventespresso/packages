import React, { useMemo } from 'react';

import { useGlobalModal } from '@eventespresso/registry';

import TicketPriceCalculatorModal from './TicketPriceCalculatorModal';
import { withContext } from '../context';
import type { BaseProps } from '../types';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);
	const { ticketId } = getData();

	const contextProps = useMemo(() => ({ ticketId, onClose }), [onClose, ticketId]);
	if (!isOpen) {
		return null;
	}
	const Component = withContext(TicketPriceCalculatorModal, contextProps);
	return <Component />;
};

export default ModalContainer;
