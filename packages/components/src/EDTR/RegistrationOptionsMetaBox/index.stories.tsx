import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { RegistrationOptionsMetaBox } from './index';
import type { RegistrationOptionsMetaBoxProps } from './types';

export default {
	argTypes: {},
	component: RegistrationOptionsMetaBox,
	title: 'Components/EDTR/RegistrationOptionsMetaBox',
} as Meta;

type RegistrationOptionsMetaBoxStory = Story<RegistrationOptionsMetaBoxProps>;

const eventManagers = [];

export const Default: RegistrationOptionsMetaBoxStory = () => (
	<RegistrationOptionsMetaBox
		allowDonations={true}
		altRegPage='altRegPage'
		displayTicketSelector={true}
		eventManagers={eventManagers}
		managerId='managerId'
		maxReg={2}
		onAltRegPageChange={noop}
		onDonationsChange={noop}
		onManagerChange={noop}
		onMaxRegChange={noop}
		onPhoneNumberChange={noop}
		onTicketSelectorChange={noop}
		phoneNumber={'10000000'}
	/>
);
