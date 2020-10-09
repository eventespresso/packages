import React, { useCallback } from 'react';

import { Button, ConfirmClose, modalCloseButtonProps } from '@eventespresso/components';
import { useTAMContext } from '../../../context';
import { useDataState } from '../../../data';

const CloseModal: React.FC = () => {
	const { onCloseModal } = useTAMContext();
	const { hasOrphanEntities } = useDataState();

	const hasErrors = hasOrphanEntities();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onConfirm = useCallback(onCloseModal, [hasErrors]);

	return hasErrors ? (
		<ConfirmClose buttonProps={modalCloseButtonProps} onConfirm={onConfirm} />
	) : (
		<Button {...modalCloseButtonProps} onClick={onCloseModal} />
	);
};

export default CloseModal;
