import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, SwitchInput, SwitchInputProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

const Donations: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChange = useCallback<SwitchInputProps['onChangeValue']>(
		(allowDonations) => {
			updateEvent({ allowDonations });
		},
		[updateEvent]
	);

	const isChecked = event?.allowDonations;

	const heading = isChecked ? __('Disable Donations') : __('Enable Donations');

	const id = 'ee-event-donations';

	return (
		<div>
			<Heading as='h4' id={id}>
				{heading}
			</Heading>
			<SwitchInput aria-describedby={id} isChecked={isChecked} onChangeValue={onChange} />
		</div>
	);
};

export default Donations;
