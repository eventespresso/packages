import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { parseInfinity } from '@eventespresso/utils';
import { InlineEditInfinity, TextProps } from '@eventespresso/ui-components';
import {
	useDatetimeMutator,
	useUpdateRelatedTickets,
	useTicketQuantityForCapacity,
} from '@eventespresso/edtr-services';
import type { DateItemProps } from '../types';

const DateCapacity: React.FC<DateItemProps> = ({ entity: datetime }) => {
	const { updateEntity } = useDatetimeMutator(datetime.id);

	const updateRelatedTickets = useUpdateRelatedTickets(datetime.id);
	const ticketQuantityForCapacity = useTicketQuantityForCapacity();

	const onChange: TextProps['onChange'] = useCallback(
		(cap) => {
			const capacity = parseInfinity(cap);
			if (capacity !== datetime.capacity) {
				updateEntity({ capacity });

				const inputGenerator = ticketQuantityForCapacity(capacity);
				updateRelatedTickets(inputGenerator);
			}
		},
		[datetime.capacity, updateEntity, ticketQuantityForCapacity, updateRelatedTickets]
	);

	return (
		<InlineEditInfinity
			onChange={onChange}
			tooltip={__('edit capacity (registration limit)…')}
			value={`${datetime.capacity}`}
		/>
	);
};

export default DateCapacity;
