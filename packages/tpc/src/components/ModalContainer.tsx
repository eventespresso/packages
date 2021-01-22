import { useMemo, useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals, withTPCContext, useOnSubmitPrices } from '@eventespresso/edtr-services';
import { wait } from '@eventespresso/utils';

import TicketPriceCalculatorModal from './TicketPriceCalculatorModal';
import type { BaseProps, TPCModalProps } from '../types';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);
	const { ticketId } = getData();

	const submitPrices = useOnSubmitPrices();
	const onSubmit = useCallback<TPCModalProps['onSubmit']>(
		async (data) => {
			// wait the next event cycle to fire up isLoading for submit button
			await wait();
			// close TPC modal
			onClose();
			// submit form
			await submitPrices(data);
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
