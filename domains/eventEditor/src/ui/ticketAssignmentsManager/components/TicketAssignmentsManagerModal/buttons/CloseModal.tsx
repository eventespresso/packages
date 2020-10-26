import React, { useCallback } from 'react';

import { ConfirmClose } from '@eventespresso/components';
import { ModalCloseButton } from '@eventespresso/adapters';
import { useTAMContext } from '../../../context';
import { useDataState } from '../../../data';

const CloseModal: React.FC = () => {
	const { onCloseModal } = useTAMContext();
	const { hasOrphanEntities } = useDataState();

	const hasErrors = hasOrphanEntities();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onConfirm = useCallback(onCloseModal, [hasErrors]);

	return hasErrors ? <ConfirmClose onConfirm={onConfirm} /> : <ModalCloseButton onClick={onCloseModal} />;
};

export default CloseModal;
