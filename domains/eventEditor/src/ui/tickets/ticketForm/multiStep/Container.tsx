import { useCallback } from 'react';

import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import Content from './Content';
import { EntityEditModalData } from '@edtrUI/types';
import useSubmitForm from './useSubmitForm';

const Container: React.FC = () => {
	const { getData, isOpen, close: closeModal, setData } = useGlobalModal<EntityEditModalData>(
		EdtrGlobalModals.EDIT_TICKET
	);

	const onClose = useCallback(() => {
		closeModal();
		// reset the global modal data
		setData({ entityId: null });
	}, [closeModal, setData]);

	const entityId = getData()?.entityId;

	const onSubmit = useSubmitForm(entityId, onClose);

	return isOpen && <Content entityId={entityId} onClose={onClose} onSubmit={onSubmit} />;
};

export default Container;
