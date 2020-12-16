import React, { useCallback } from 'react';

import { RegistrationOptionsMetaBox } from '@eventespresso/components';
import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import type { InlineEditProps, SwitchProps } from '@eventespresso/adapters';

// import AltRegPage from './AltRegPage';
// import DefaultRegistrationStatus from './DefaultRegistrationStatus';
// import Donations from './Donations';
// import EventPhoneNumber from './EventPhoneNumber';
// import EventManager from './EventManager';
// import MaxRegistrations from './MaxRegistrations';
// import TicketSelectorCheckbox from './TicketSelector';

const EventRegistrationOptions: React.FC = () => {
	const event = useEvent();
	const eventManagers = useEventManagers();

	const { updateEntity: updateEvent } = useEventMutator(event?.id);

	const onAltRegPageChange = useCallback<InlineEditProps['onChange']>(
		(newAltRegPage) => {
			if (newAltRegPage !== event?.altRegPage) {
				updateEvent({ altRegPage: newAltRegPage });
			}
		},
		[event?.altRegPage, updateEvent]
	);

	const onDonationsChange = useCallback<SwitchProps['onChangeValue']>(
		(allowDonations) => {
			if (event?.allowDonations !== allowDonations) {
				updateEvent({ allowDonations });
			}
		},
		[event?.allowDonations, updateEvent]
	);

	const onManagerChange = useCallback(
		(newManagerId: string): void => {
			if (newManagerId !== event?.manager?.id) {
				updateEvent({ manager: newManagerId });
			}
		},
		[event?.manager?.id, updateEvent]
	);

	const onMaxRegChange = useCallback<InlineEditProps['onChange']>(
		(newMaxRegistrations) => {
			const maxRegistrations = Number(newMaxRegistrations);
			if (maxRegistrations !== event?.maxRegistrations) {
				updateEvent({ maxRegistrations });
			}
		},
		[event?.maxRegistrations, updateEvent]
	);

	const onPhoneNumberChange = useCallback<InlineEditProps['onChange']>(
		(newPhoneNumber) => {
			if (newPhoneNumber !== event?.phoneNumber) {
				updateEvent({ phoneNumber: newPhoneNumber });
			}
		},
		[event?.phoneNumber, updateEvent]
	);

	const onTicketSelectorChange = useCallback<SwitchProps['onChangeValue']>(
		(displayTicketSelector) => {
			if (event?.displayTicketSelector !== displayTicketSelector) {
				updateEvent({ displayTicketSelector });
			}
		},
		[event?.displayTicketSelector, updateEvent]
	);

	return (
		<RegistrationOptionsMetaBox
			allowDonations={event?.allowDonations}
			altRegPage={event?.altRegPage}
			displayTicketSelector={event?.displayTicketSelector}
			eventManagers={eventManagers}
			managerId={event?.manager?.id}
			maxReg={event?.maxRegistrations}
			onAltRegPageChange={onAltRegPageChange}
			onDonationsChange={onDonationsChange}
			onManagerChange={onManagerChange}
			onMaxRegChange={onMaxRegChange}
			onPhoneNumberChange={onPhoneNumberChange}
			onTicketSelectorChange={onTicketSelectorChange}
			phoneNumber={event?.phoneNumber}
		/>
	);
};

export default withFeature('use_reg_options_meta_box')(EventRegistrationOptions);
