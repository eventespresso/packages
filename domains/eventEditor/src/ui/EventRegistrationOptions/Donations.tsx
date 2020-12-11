import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Switch, SwitchProps } from '@eventespresso/components';
import { useEvent, useEventMutator } from '@eventespresso/edtr-services';

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
	const heading = isChecked ? __('Donations Enabled') : __('Donations Disabled');
	const id = 'ee-event-donations';

	const input = <Switch aria-describedby={id} isChecked={isChecked} onChangeValue={onChange} />;

	return <GridItem id={id} input={input} label={heading} />;
};

export default Donations;
