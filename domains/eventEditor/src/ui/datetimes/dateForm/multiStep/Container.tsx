import { useCallback } from 'react';

import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import Content from './Content';
import { EntityEditModalData } from '@edtrUI/types';
import useSubmitForm from './useSubmitForm';

const Container: React.FC = () => {
	const { getData, isOpen, close: closeEditDateModal, setData } = useGlobalModal<EntityEditModalData>(
		EdtrGlobalModals.EDIT_DATE
	);
	const { close: closeNewDateModal } = useGlobalModal(EdtrGlobalModals.NEW_DATE);

	const onClose = useCallback(() => {
		closeEditDateModal();
		closeNewDateModal();
		// reset the global modal data
		setData({ entityId: null });
	}, [closeEditDateModal, closeNewDateModal, setData]);

	const entityId = getData()?.entityId;

	const onSubmit = useSubmitForm(entityId, onClose);

	return isOpen && <Content entityId={entityId} onClose={onClose} onSubmit={onSubmit} />;
};

export default Container;
