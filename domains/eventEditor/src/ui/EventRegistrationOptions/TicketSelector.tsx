import React from 'react';

import { __ } from '@eventespresso/i18n';
import { GridItem, Switch } from '@eventespresso/components';
import type { RegistrationOptionsMetaBoxProps } from './types';

interface Props extends Pick<RegistrationOptionsMetaBoxProps, 'displayTicketSelector' | 'onTicketSelectorChange'> {}

const TicketSelector: React.FC<Props> = ({ displayTicketSelector: isChecked, onTicketSelectorChange }) => {
	const id = 'ee-event-registration-ticket-selector';
	const label = isChecked ? __('Ticket Selector Enabled') : __('Ticket Selector Disabled');

	const input = (
		<Switch
			aria-describedby={id}
			isChecked={isChecked}
			onChangeValue={onTicketSelectorChange}
			debounceDelay={5000}
		/>
	);

	return <GridItem id={id} input={input} label={label} size='small' />;
};

export default TicketSelector;
