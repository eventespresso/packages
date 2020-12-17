import type { InlineEditProps } from '@eventespresso/adapters';
import type { SelectProps, SwitchProps } from '../../';

export interface RegistrationOptionsMetaBoxProps {
	allowDonations: boolean;
	altRegPage: string;
	displayTicketSelector: boolean;
	eventManagers: { id: string; name: string }[];
	managerId: string;
	maxReg: number;
	onAltRegPageChange: InlineEditProps['onChange'];
	onDonationsChange: SwitchProps['onChangeValue'];
	onManagerChange: SelectProps['onChangeValue'];
	onMaxRegChange: InlineEditProps['onChange'];
	onPhoneNumberChange: InlineEditProps['onChange'];
	onTicketSelectorChange: SwitchProps['onChangeValue'];
	phoneNumber: string;
}
