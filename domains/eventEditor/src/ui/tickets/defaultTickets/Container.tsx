import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { wait } from '@eventespresso/utils';
import { ModalWithAlert } from '@eventespresso/ui-components';

import { withContext } from './context';
import { useDataState, useSubmitForm } from './data';
import ModalBody from './ModalBody';

const Container: React.FC = () => {
	const { close: closeModal, isOpen } = useGlobalModal(EdtrGlobalModals.DEFAULT_TICKETS);

	const { getData, isDirty, reset } = useDataState();

	const submitForm = useSubmitForm(getData());

	const onSubmit = useCallback(async () => {
		// wait the next event cycle to fire up isLoading for submit button
		await wait();
		// close modal
		closeModal();
		// submit the data for mutations
		await submitForm();
		reset();
	}, [closeModal, reset, submitForm]);

	return (
		<ModalWithAlert
			bodyClassName='ee-default-tickets-modal__body'
			className='ee-default-tickets-modal'
			isOpen={isOpen}
			onClose={closeModal}
			onCancel={closeModal}
			showAlertOnClose={isDirty}
			title={__('Default tickets')}
			onSubmit={onSubmit}
		>
			<ModalBody />
		</ModalWithAlert>
	);
};

export default withContext(Container);
