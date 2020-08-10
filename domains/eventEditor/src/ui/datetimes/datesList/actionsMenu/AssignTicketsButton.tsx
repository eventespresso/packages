import React from 'react';
import { __ } from '@wordpress/i18n';

import type { EntityListItemProps } from '@eventespresso/components';
import { TypeName } from '@eventespresso/services';
import { Ticket } from '@eventespresso/icons';
import { IconButton, ItemCount } from '@eventespresso/components';

import { useRelatedTickets } from '@eventespresso/edtr-services';
import { useTicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager';
import { Datetime } from '@eventespresso/edtr-services';
import { withIsLoaded } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import type { TooltipProps } from '@eventespresso/adapters';

const AssignTicketsButton: React.FC<EntityListItemProps<Datetime>> = React.memo(({ entity }) => {
	const { ModalContainer, onOpen, ...disclosure } = useTicketAssignmentsManager();

	const relatedTickets = useRelatedTickets({
		entity: 'datetimes',
		entityId: entity.id,
	});

	const count = relatedTickets.length;

	const title = count
		? __('Number of related tickets')
		: __('There are no tickets assigned to this datetime. Please click the ticket icon to update the assignments.');

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'right' });

	return (
		<>
			<ItemCount count={count} emphasizeZero title={title} zeroCountChar='!'>
				<IconButton
					borderless
					icon={Ticket}
					onClick={onOpen}
					tooltip={__('assign tickets')}
					tooltipProps={tooltipProps}
				/>
			</ItemCount>
			<ModalContainer assignmentType='forDate' entity={entity} {...disclosure} />
		</>
	);
});

export default withIsLoaded<EntityListItemProps<Datetime>>(TypeName.tickets, ({ entity, loaded }) => {
	/* Hide TAM unless tickets are loaded */
	return loaded && <AssignTicketsButton entity={entity} />;
});
