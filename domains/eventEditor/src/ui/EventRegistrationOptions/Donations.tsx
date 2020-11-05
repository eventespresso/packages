import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Switch, SwitchProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

import GridItem from './GridItem';

const Donations: React.FC = () => {
	const event = useEvent();
	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onChange = useCallback<SwitchProps['onChangeValue']>(
		(allowDonations) => {
			updateEvent({ allowDonations });
		},
		[updateEvent]
	);

	const isChecked = event?.allowDonations;
	const heading = isChecked ? __('Disable Donations') : __('Enable Donations');
	const id = 'ee-event-donations';

	return (
		<GridItem
			id={id}
			input={<Switch aria-describedby={id} checked={isChecked} onChangeValue={onChange} />}
			label={heading}
		/>
	);
};

export default Donations;
