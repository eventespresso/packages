import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, NewEntityOption } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Rem } from '@eventespresso/icons';
import { RemGlobalModals } from '../types';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const RemButton: React.FC = () => {
	const { open: openRemModal } = useGlobalModal(RemGlobalModals.MAIN);
	const { close: closeOptionsModal } = useGlobalModal(EdtrGlobalModals.NEW_DATE_MODAL);

	const onClick = useCallback(() => {
		closeOptionsModal();
		openRemModal();
	}, [closeOptionsModal, openRemModal]);

	return (
		<NewEntityOption
			className={'ee-new-entity-option__recurring-datetime'}
			description={__('Add multiple dates in bulk that follow a recurring pattern')}
			icon={Rem}
			title={__('Recurring Dates')}
		>
			<Button buttonType='primary' onClick={onClick}>
				{__('Add Recurring Dates')}
			</Button>
		</NewEntityOption>
	);
};

export default RemButton;
