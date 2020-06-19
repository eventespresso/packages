import React, { useCallback } from 'react';

import { Button, ConfirmClose} from '@eventespresso/components';
import { modalCloseButtonProps } from '@eventespresso/adapters';
import { useTAMContext } from '../../../context';

const CloseModal: React.FC = () => {
	const { dataState, onCloseModal } = useTAMContext();

	const { hasOrphanEntities } = dataState;

	const hasErrors = hasOrphanEntities();

	const onConfirm = useCallback(onCloseModal, [hasErrors]);

	return hasErrors ? (
		<ConfirmClose buttonProps={modalCloseButtonProps} onConfirm={onConfirm} />
	) : (
		<Button {...modalCloseButtonProps} onClick={onCloseModal} />
	);
};

export default React.memo(CloseModal);
