import type { InlineEditProps } from '@eventespresso/adapters';
import type { SelectProps, SwitchProps } from '@eventespresso/components';
import type { Event, EventManager } from '@eventespresso/edtr-services';

export interface EventRegistrationOptionsProps {
	allowDonations: Event['allowDonations'];
	altRegPage: Event['altRegPage'];
	displayTicketSelector: Event['displayTicketSelector'];
	eventManagers: EventManager[];
	managerId: Event['manager']['id'];
	maxReg: Event['maxRegistrations'];
	onAltRegPageChange: InlineEditProps['onChange'];
	onDonationsChange: SwitchProps['onChangeValue'];
	onManagerChange: SelectProps['onChangeValue'];
	onMaxRegChange: InlineEditProps['onChange'];
	onPhoneNumberChange: InlineEditProps['onChange'];
	onTicketSelectorChange: SwitchProps['onChangeValue'];
	phoneNumber: Event['phoneNumber'];
}
