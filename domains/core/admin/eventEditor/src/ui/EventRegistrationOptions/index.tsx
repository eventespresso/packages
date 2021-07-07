import { __ } from '@eventespresso/i18n';
import { Grid, Heading } from '@eventespresso/ui-components';
import { noop } from '@eventespresso/utils';
import { withFeature } from '@eventespresso/services';

import ActiveStatus from './ActiveStatus';
import AltRegPage from './AltRegPage';
import DefaultRegistrationStatus from './DefaultRegistrationStatus';
import Donations from './Donations';
import EventManager from './EventManager';
import EventPhoneNumber from './EventPhoneNumber';
import MaxRegistrations from './MaxRegistrations';
import TicketSelector from './TicketSelector';
import withData from './withData';

import type { EventRegistrationOptionsProps } from './types';

import './style.scss';

const columns = { base: 1, sm: 2, md: 4 };

export const EventRegistrationOptions: React.FC<Partial<EventRegistrationOptionsProps>> = ({
	allowDonations,
	altRegPage,
	defaultRegStatus,
	displayTicketSelector,
	eventManagers,
	managerId,
	maxReg,
	onAltRegPageChange = noop,
	onDefaultRegStatusChange,
	onDonationsChange,
	onManagerChange,
	onPhoneNumberChange,
	onStatusChange,
	onTicketSelectorChange,
	onMaxRegChange = noop,
	phoneNumber,
	status,
}) => (
	<div className='ee-event-registration-options ee-edtr-section'>
		<Heading as='h3' className='ee-edtr-section-heading'>
			{__('Registration Options')}
		</Heading>
		<Grid columns={columns} spacing='1.25rem'>
			<ActiveStatus status={status} onStatusChange={onStatusChange} />
			<EventManager eventManagers={eventManagers} managerId={managerId} onManagerChange={onManagerChange} />
			<EventPhoneNumber phoneNumber={phoneNumber} onPhoneNumberChange={onPhoneNumberChange} />
			<Donations allowDonations={allowDonations} onDonationsChange={onDonationsChange} />
			
			<DefaultRegistrationStatus
				defaultRegStatus={defaultRegStatus}
				onDefaultRegStatusChange={onDefaultRegStatusChange}
			/>
			<TicketSelector
				displayTicketSelector={displayTicketSelector}
				onTicketSelectorChange={onTicketSelectorChange}
			/>
			<MaxRegistrations maxReg={maxReg} onMaxRegChange={onMaxRegChange} />
			<AltRegPage altRegPage={altRegPage} onAltRegPageChange={onAltRegPageChange} />
		</Grid>
	</div>
);

export default withFeature('use_reg_options_meta_box')(withData(EventRegistrationOptions));
