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

	return (
		<GridItem
			id={id}
			input={<InlineEditText aria-describedby={id} onChange={onChange} tag='h4' value={phoneNumber} />}
			label={__('Event Phone Number')}
		/>
	);
};

export default EventPhoneNumber;
