import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, NewEntityOption } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Rem } from '@eventespresso/icons';
import { RemGlobalModals } from '../types';

const RemButton: React.FC = () => {
	const { open: openRemModal } = useGlobalModal(RemGlobalModals.MAIN);

	return (
		<NewEntityOption
			className={'ee-new-entity-option__recurring-datetime'}
			description={__('Add multiple dates in bulk that follow a recurring pattern')}
			icon={Rem}
			title={__('Recurring Dates')}
		>
			<Button buttonType='primary' onClick={openRemModal}>
				{__('Add Recurring Dates')}
			</Button>
		</NewEntityOption>
	);
};

export default RemButton;
