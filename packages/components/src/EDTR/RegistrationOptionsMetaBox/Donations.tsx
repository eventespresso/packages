import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Switch } from '../../';
import type { RegistrationOptionsMetaBoxProps } from './types';

interface Props extends Pick<RegistrationOptionsMetaBoxProps, 'allowDonations' | 'onDonationsChange'> {}

const Donations: React.FC<Props> = ({ allowDonations: isChecked, onDonationsChange }) => {
	const heading = isChecked ? __('Donations Enabled') : __('Donations Disabled');
	const id = 'ee-event-donations';

	const input = (
		<Switch aria-describedby={id} isChecked={isChecked} onChangeValue={onDonationsChange} debounceDelay={5000} />
	);

	return <GridItem id={id} input={input} label={heading} />;
};

export default Donations;
