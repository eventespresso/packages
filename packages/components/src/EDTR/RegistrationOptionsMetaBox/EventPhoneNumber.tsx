import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, InlineEditText } from '../../';
import type { RegistrationOptionsMetaBoxProps } from './types';

interface Props extends Pick<RegistrationOptionsMetaBoxProps, 'phoneNumber' | 'onPhoneNumberChange'> {}

const EventPhoneNumber: React.FC<Props> = ({ onPhoneNumberChange, phoneNumber }) => {
	const id = 'ee-event-registration-phone-number';

	const input = <InlineEditText aria-describedby={id} onChange={onPhoneNumberChange} tag='h4' value={phoneNumber} />;

	return <GridItem id={id} input={input} label={__('Event Phone Number')} />;
};

export default EventPhoneNumber;
