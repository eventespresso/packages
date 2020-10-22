import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Heading, SwitchInput } from '@eventespresso/components';

const TicketSelector: React.FC = ({ isChecked = false }: any) => {
	const onChange = useCallback(() => {
		//
	}, []);

	const ariaLabel = isChecked ? __('hide ticket selector') : __('show ticket selector');

	return (
		<div>
			<Heading as='h4'>{__('Display Ticket Selector')}</Heading>
			<SwitchInput aria-label={ariaLabel} isChecked={isChecked} onChangeValue={onChange} />
		</div>
	);
};

export default TicketSelector;
