import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Switch } from '@eventespresso/components';
import type { EventRegistrationOptionsProps } from './types';

interface Props extends Pick<EventRegistrationOptionsProps, 'allowDonations' | 'onDonationsChange'> {}

const Donations: React.FC<Props> = ({ allowDonations: isChecked, onDonationsChange }) => {
	const heading = isChecked ? __('Donations Enabled') : __('Donations Disabled');
	const id = 'ee-event-donations';

	const input = (
		<Switch aria-describedby={id} isChecked={isChecked} onChangeValue={onDonationsChange} debounceDelay={5000} />
	);

	return <GridItem id={id} input={input} label={heading} size='small' />;
};

export default Donations;
