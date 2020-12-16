// import type { InlineEditProps } from '@eventespresso/adapters';

export interface RegistrationOptionsMetaBoxProps {
	allowDonations: boolean;
	altRegPage: string;
	displayTicketSelector: boolean;
	eventManagers: any[];
	managerId: string;
	maxReg: number;

	onAltRegPageChange: any;
	onDonationsChange: any;
	onManagerChange: any;
	onMaxRegChange: any;
	onPhoneNumberChange: any;
	onTicketSelectorChange: any;

	phoneNumber: string;
}
