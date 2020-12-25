import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import type { TicketItemProps } from '../types';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { InlineEditText } from '@eventespresso/ui-components';

interface EditableNameProps extends TicketItemProps {
	className?: string;
	view?: 'card' | 'table';
}

const EditableName: React.FC<Partial<EditableNameProps>> = ({ className, entity: ticket, view = 'card' }) => {
	const { updateEntity } = useTicketMutator(ticket.id);

	const lineCount = view === 'card' && 2;

	const onChangeName = useCallback(
		(name: string): void => {
			if (name !== ticket.name) {
				updateEntity({ name });
			}
		},
		[ticket.name, updateEntity]
	);

	const tooltip = __('edit title…');

	const ticketName = ticket.name || tooltip;

	return (
		<InlineEditText
			className={className}
			lineCount={lineCount}
			onChange={onChangeName}
			tag={view === 'table' ? 'div' : 'h4'}
			tooltip={tooltip}
			value={ticketName}
		/>
	);
};

export default EditableName;
