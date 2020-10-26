import React from 'react';
import { __ } from '@eventespresso/i18n';

import { ModalCloseButton } from '@eventespresso/adapters';
import useConfirmationDialog from './useConfirmationDialog';
import type { ConfirmPropsWithButton } from './types';

const useConfirmWithButton: React.FC<ConfirmPropsWithButton> = ({ buttonProps, ...props }) => {
	const title = props.title || __('Please confirm this action.');
	const { confirmationDialog, onOpen } = useConfirmationDialog({ ...props, title });

	return (
		<>
			<ModalCloseButton onClick={onOpen} />
			{confirmationDialog}
		</>
	);
};

export default useConfirmWithButton;
