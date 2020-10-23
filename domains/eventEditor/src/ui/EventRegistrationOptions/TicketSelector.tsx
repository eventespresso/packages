import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, SwitchInput, SwitchInputProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

const TicketSelector: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChange = useCallback<SwitchInputProps['onChangeValue']>(
		(displayTicketSelector) => {
			updateEvent({ displayTicketSelector });
		},
		[updateEvent]
	);

	const isChecked = event?.displayTicketSelector;
	const ariaLabel = isChecked ? __('hide ticket selector') : __('show ticket selector');

	return (
		<div>
			<Heading as='h4'>{__('Display Ticket Selector')}</Heading>
			<SwitchInput aria-label={ariaLabel} isChecked={isChecked} onChangeValue={onChange} />
		</div>
	);
};

export default TicketSelector;
