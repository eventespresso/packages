import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { SwitchInput, SwitchInputProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

import GridItem from './GridItem';

const TicketSelector: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChange = useCallback<SwitchInputProps['onChangeValue']>(
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
			input={<SwitchInput aria-label={ariaLabel} isChecked={isChecked} onChangeValue={onChange} />}
			label={__('Display Ticket Selector')}
		/>
	);
};

export default TicketSelector;
