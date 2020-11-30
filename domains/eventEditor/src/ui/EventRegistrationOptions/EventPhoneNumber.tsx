import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps } from '@eventespresso/adapters';

const EventPhoneNumber: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);
	const phoneNumber = event?.phoneNumber;

	const onChange = useCallback<InlineEditProps['onChange']>(
		(newPhoneNumber) => {
			if (newPhoneNumber !== phoneNumber) {
				updateEvent({ phoneNumber: newPhoneNumber });
			}
		},
		[phoneNumber, updateEvent]
	);

	const id = 'ee-event-registration-phone-number';

	const input = <InlineEditText aria-describedby={id} onChange={onChange} tag='h4' value={phoneNumber} />;

	return <GridItem id={id} input={input} label={__('Event Phone Number')} />;
};

export default EventPhoneNumber;
