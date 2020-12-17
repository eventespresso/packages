import type { InlineEditProps } from '@eventespresso/adapters';
import type { SelectProps, SwitchProps } from '@eventespresso/components';
import type { Event, EventManager } from '@eventespresso/edtr-services';

export interface EventRegistrationOptionsProps
	extends Pick<Event, 'allowDonations' | 'altRegPage' | 'displayTicketSelector' | 'phoneNumber'> {
	eventManagers: EventManager[];
	managerId: Event['manager']['id'];
	maxReg: Event['maxRegistrations'];
	onAltRegPageChange: InlineEditProps['onChange'];
	onDonationsChange: SwitchProps['onChangeValue'];
	onManagerChange: SelectProps['onChangeValue'];
	onMaxRegChange: InlineEditProps['onChange'];
	onPhoneNumberChange: InlineEditProps['onChange'];
	onTicketSelectorChange: SwitchProps['onChangeValue'];
}
