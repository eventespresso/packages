import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Button, NewEntityOption } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Rem } from '@eventespresso/icons';

const RemButton: React.FC = () => {
	const { open: openRemModal } = useGlobalModal('rem');
	const { close: closeOptionsPopover } = useGlobalModal('newDatePopover');

	const onClick = useCallback(() => {
		closeOptionsPopover();
		openRemModal();
	}, [closeOptionsPopover, openRemModal]);

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
