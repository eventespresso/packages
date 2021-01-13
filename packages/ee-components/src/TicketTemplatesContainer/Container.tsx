import { useCallback } from 'react';

// import { __ } from '@eventespresso/i18n';
// import { useTickets } from '@eventespresso/edtr-services';
import { ModalWithAlert, ModalWithAlertProps } from '@eventespresso/ui-components';

// import { useFormState } from '../../data';
// import { withContext } from '../../context';
// import { RemGlobalModals } from '../../types';
import Footer from './Footer';
// import useSubmitForm from './useSubmitForm';
// import Tickets from './Tickets';

// const DEFAULT_DATETIME_IDS = [];

interface Props extends Pick<ModalWithAlertProps, 'isOpen' | 'onClose'> {}

const Container: React.FC<Props> = ({ isOpen, onClose: closeModal }) => {
	// const defaultTickets = useTickets();

	// const { reset: resetFormState, tickets } = useFormState();
	// const submitForm = useSubmitForm(tickets, getData()?.entityIds || DEFAULT_DATETIME_IDS);

	// const resetData = useCallback(() => {
	// 	resetFormState();
	// 	// reset the global modal data
	// 	setData({ entityIds: null });
	// }, [resetFormState, setData]);

	const onSubmit = useCallback(async () => {
		closeModal();
		// submit the data for mutations
		// await submitForm();

		// resetData();
	}, [closeModal]);

	// const onClose = useCallback(() => {
	// 	closeModal();
	// 	resetData();
	// }, [close, resetData]);

	return (
		<ModalWithAlert isOpen={isOpen} onClose={closeModal}>
			{/* <Tickets defaultTickets={defaultTickets} /> */}
			<Footer onSubmit={onSubmit} onClose={closeModal} />
		</ModalWithAlert>
	);
};

// export default withContext(Container);
export default Container;
