import React from 'react';
import { __ } from '@wordpress/i18n';

import { Calendar } from '@eventespresso/icons';
import { IconButton, EntityListItemProps, ItemCount } from '@eventespresso/components';
import { useRelatedDatetimes } from '@eventespresso/edtr-services';
import { useTicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager';
import { TypeName } from '@eventespresso/services';
import type { Ticket } from '@eventespresso/edtr-services';
import type { TooltipProps } from '@eventespresso/adapters';
import { useMemoStringify, withIsLoaded } from '@eventespresso/services';

const AssignDatesButton: React.FC<EntityListItemProps<Ticket>> = React.memo(({ entity }) => {
	const { ModalContainer, onOpen, ...disclosure } = useTicketAssignmentsManager();

	const relatedDatetimes = useRelatedDatetimes({
		entity: 'tickets',
		entityId: entity.id,
	});
	const count = relatedDatetimes.length;

	const relatedDatetimeDbIds = relatedDatetimes.map(({ dbId }) => dbId);

	const title = count
		? `${__('Related Dates:')} ${relatedDatetimeDbIds.join(', ')}`
		: __(
				'There are no event dates assigned to this ticket. Please click the calendar icon to update the assignments.'
		  );

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'left' });

	return (
		<>
			<ItemCount count={count} emphasizeZero title={title} zeroCountChar='!'>
				<IconButton
					borderless
					icon={Calendar}
					onClick={onOpen}
					tooltip={__('assign dates')}
					tooltipProps={tooltipProps}
				/>
			</ItemCount>
			<ModalContainer assignmentType='forTicket' entity={entity} {...disclosure} />
		</>
	);
});

export default withIsLoaded<EntityListItemProps<Ticket>>(TypeName.datetimes, ({ entity, loaded }) => {
	/* Hide TAM unless dates are loaded */
	return loaded && <AssignDatesButton entity={entity} />;
});
