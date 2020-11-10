import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Ticket } from '@eventespresso/icons';
import { Button, ButtonRow } from '@eventespresso/components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import { BaseProps } from '../../ticketAssignmentsManager';
import { NewDateButton } from './newDateOptions';

const DatesListButtons: React.FC = () => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);

	const onOpen = useCallback(() => {
		openWithData({ assignmentType: 'forAll' });
	}, [openWithData]);

	return (
		<ButtonRow>
			<NewDateButton />
			<Button buttonText={__('Ticket Assignments')} icon={Ticket} onClick={onOpen} size='big' />
		</ButtonRow>
	);
};

export default DatesListButtons;
