import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import type { TicketItemProps } from '../types';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { InlineEditText } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/services';

interface EditableNameProps extends TicketItemProps {
	className?: string;
	view?: 'card' | 'table';
}

const EditableName: React.FC<EditableNameProps> = ({ className, entity: ticket, view = 'card' }) => {
	const { updateEntity } = useTicketMutator(ticket.id);

	const onChangeName = useCallback(
		(name: string): void => {
			if (name !== ticket.name) {
				updateEntity({ name });
			}
		},
		[ticket.name, updateEntity]
	);

	const ticketName = ticket.name ? ticket.name : __('Edit title...');

	return (
		<InlineEditText
			fitText={view === 'card'}
			tag={view === 'table' ? 'p' : 'h4'}
			className={className}
			onChangeValue={onChangeName}
			value={ticketName}
		/>
	);
};

export default React.memo(EditableName, getPropsAreEqual(['entity', 'name']));
