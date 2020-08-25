import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { parseInfinity, getPropsAreEqual } from '@eventespresso/utils';
import { InlineEditInfinity, TextProps } from '@eventespresso/components';
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
			onChangeValue={onChange}
			tooltip={__('edit capacity (registration limit)...')}
			value={`${datetime.capacity}`}
		/>
	);
};

export default React.memo(DateCapacity, getPropsAreEqual(['entity']));
