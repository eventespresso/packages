import React, { useCallback } from 'react';

import { EspressoForm } from '@eventespresso/form';
import useDatetimeFormConfig from './useDateFormConfig';
import {
	useDatetimeMutator,
	useTicketQuantityForCapacity,
	useUpdateRelatedTickets,
} from '@eventespresso/edtr-services';
import type { EditDatetimeProps } from './types';

const EditDatetime: React.FC<EditDatetimeProps> = ({ datetime, onClose }) => {
	const { updateEntity } = useDatetimeMutator();

	const updateRelatedTickets = useUpdateRelatedTickets(datetime?.id);
	const ticketQuantityForCapacity = useTicketQuantityForCapacity();

	const onSubmit = useCallback(
		(fields) => {
			updateEntity(fields);

			const capacityChanged = fields?.capacity !== datetime?.capacity;

			if (capacityChanged) {
				const inputGenerator = ticketQuantityForCapacity(fields?.capacity);
				updateRelatedTickets(inputGenerator, fields?.tickets);
			}

			onClose();
		},
		[datetime?.capacity, onClose, ticketQuantityForCapacity, updateEntity, updateRelatedTickets]
	);

	const formConfig = useDatetimeFormConfig(datetime?.id, { onSubmit });

	return <EspressoForm {...formConfig} />;
};

export default EditDatetime;
