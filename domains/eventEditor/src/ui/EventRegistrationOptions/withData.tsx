import React, { useCallback } from 'react';

import { useEvent, useEventManagers, useEventMutator } from '@eventespresso/edtr-services';
import type { InlineEditProps, SwitchProps } from '@eventespresso/adapters';
import type { AnyObject } from '@eventespresso/utils';
import type { EventRegistrationOptionsProps } from './types';

const withData = <P extends AnyObject>(
	WrappedComponent: React.ComponentType<EventRegistrationOptionsProps>
): React.ComponentType<P> => {
	const WithData: React.FC<P> = () => {
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
			<WrappedComponent
				allowDonations={event?.allowDonations}
				altRegPage={event?.altRegPage}
				defaultRegStatus={event?.defaultRegStatus}
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

	return WithData;
};

export default withData;
