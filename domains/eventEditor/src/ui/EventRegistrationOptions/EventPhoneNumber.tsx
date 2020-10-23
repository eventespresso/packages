import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

import GridItem from './GridItem';

const EventPhoneNumber: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const phoneNumber = event?.phoneNumber;

	const onChange = useCallback<InlineEditProps['onChange']>(
		(phoneNumber) => {
			updateEvent({ phoneNumber });
		},
		[updateEvent]
	);

	const id = 'ee-event-registration-phone-number';
	const text = __('Event Phone Number');

	return (
		<GridItem
			id={id}
			input={<InlineEditText onChange={onChange} tag='h4' tooltip={text} value={phoneNumber} />}
			label={text}
		/>
	);
};

export default EventPhoneNumber;
