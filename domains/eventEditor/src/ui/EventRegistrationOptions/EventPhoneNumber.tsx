import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

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

	const text = __('Event Phone Number');

	return (
		<div>
			<Heading as='h4'>{text}</Heading>
			<InlineEditText onChange={onChange} tag='h4' tooltip={text} value={phoneNumber} />
		</div>
	);
};

export default EventPhoneNumber;
