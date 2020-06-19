import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import type { TicketItemProps } from '../types';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { InlineEditTextArea } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/services';

interface EditableDescProps extends TicketItemProps {
	className?: string;
}

const EditableDesc: React.FC<EditableDescProps> = ({ entity: ticket, className }) => {
	const { updateEntity } = useTicketMutator(ticket.id);

	const onChangeDesc = useCallback(
		(description: string): void => {
			if (description !== ticket.description) {
				updateEntity({ description });
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ticket.cacheId, updateEntity]
	);

	const ticketDesc = ticket.description ? ticket.description : __('Edit description...');

	return <InlineEditTextArea className={className} onChangeValue={onChangeDesc} value={ticketDesc} />;
};

export default React.memo(EditableDesc, getPropsAreEqual(['entity', 'description']));
