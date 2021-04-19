import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { parseInfinity } from '@eventespresso/utils';
import { InlineEditInfinity, InlineEditProps } from '@eventespresso/ui-components';
import { useTicketMutator } from '@eventespresso/edtr-services';
import type { TicketItemProps } from '../types';

const TicketQuantity: React.FC<TicketItemProps> = ({ entity: ticket }) => {
	const { updateEntity } = useTicketMutator(ticket.id);

	const onChange: InlineEditProps['onChange'] = useCallback(
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
			data-testid='ee-ticket-inline-qty'
			onChange={onChange}
			tooltip={__('edit quantity of tickets available…')}
			value={`${ticket.quantity}`}
		/>
	);
};

export default TicketQuantity;
