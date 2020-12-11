import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Switch, SwitchProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

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
	const label = isChecked ? __('Ticket Selector Enabled') : __('Ticket Selector Disabled');

	const input = <Switch aria-describedby={id} isChecked={isChecked} onChangeValue={onChangeValue} />;

	return <GridItem id={id} input={input} label={label} />;
};

export default TicketSelector;
