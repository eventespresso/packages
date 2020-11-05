import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Switch, SwitchProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

import GridItem from './GridItem';

const TicketSelector: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChangeValue = useCallback<SwitchProps['onChangeValue']>(
		(displayTicketSelector) => {
			updateEvent({ displayTicketSelector });
		},
		[updateEvent]
	);

	const id = 'ee-event-registration-ticket-selector';
	const isChecked = event?.displayTicketSelector;
	const ariaLabel = isChecked ? __('hide ticket selector') : __('show ticket selector');

	return (
		<GridItem
			id={id}
			input={<Switch aria-label={ariaLabel} checked={isChecked} onChangeValue={onChangeValue} />}
			label={__('Display Ticket Selector')}
		/>
	);
};

export default TicketSelector;
