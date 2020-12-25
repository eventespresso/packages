import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { parseInfinity } from '@eventespresso/utils';
import { InlineEditInfinity, TextProps } from '@eventespresso/ui-components';
import { useTicketMutator } from '@eventespresso/edtr-services';
import type { TicketItemProps } from '../types';

const TicketQuantity: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { updateEntity } = useTicketMutator(ticket.id);

	const onChange: TextProps['onChange'] = useCallback(
		(qty) => {
			const quantity = parseInfinity(qty);
			if (quantity !== ticket.quantity) {
				updateEntity({ quantity });
			}
		},
		[ticket.quantity, updateEntity]
	);

	return (
		<InlineEditInfinity
			onChange={onChange}
			value={`${ticket.quantity}`}
			tooltip={__('edit quantity of tickets available…')}
		/>
	);
};

export default TicketQuantity;
