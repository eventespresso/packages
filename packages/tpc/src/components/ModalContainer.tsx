import { useMemo, useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals, withTPCContext } from '@eventespresso/edtr-services';

import TicketPriceCalculatorModal from './TicketPriceCalculatorModal';
import { useOnSubmitPrices } from '../hooks';
import type { BaseProps, TPCModalProps } from '../types';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);
	const { ticketId } = getData();

	const submitPrices = useOnSubmitPrices();
	const onSubmit = useCallback<TPCModalProps['onSubmit']>(
		(data) => {
			// close TPC modal
			onClose();
			// submit form
			submitPrices(data);
		},
		[submitPrices, onClose]
	);

	const contextProps = useMemo(() => ({ ticketId, onClose }), [onClose, ticketId]);

	if (!isOpen) {
		return null;
	}

	const Component = withTPCContext(TicketPriceCalculatorModal, contextProps);

	return <Component onSubmit={onSubmit} />;
};

export default ModalContainer;
