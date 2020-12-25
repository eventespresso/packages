import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { useRelatedTickets, EdtrGlobalModals } from '@eventespresso/edtr-services';
import type { EntityListItemProps } from '@eventespresso/ui-components';
import { IconButton, ItemCount } from '@eventespresso/ui-components';
import { TypeName, withIsLoaded } from '@eventespresso/services';
import { Ticket } from '@eventespresso/icons';
import type { Datetime } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';
import type { TooltipProps } from '@eventespresso/adapters';
import { useGlobalModal } from '@eventespresso/registry';

import { BaseProps } from '@edtrUI/ticketAssignmentsManager';

const AssignTicketsButton: React.FC<EntityListItemProps<Datetime>> = ({ entity }) => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);

	const relatedTickets = useRelatedTickets({
		entity: 'datetimes',
		entityId: entity.id,
	});

	const count = relatedTickets.length;

	const title = count
		? __('Number of related tickets')
		: __('There are no tickets assigned to this datetime. Please click the ticket icon to update the assignments.');

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'right' });

	const onOpen = useCallback(() => {
		openWithData({ entity, assignmentType: 'forDate' });
	}, [entity, openWithData]);

	return (
		<ItemCount count={count} title={title} zeroCountChar='!'>
			<IconButton
				borderless
				icon={Ticket}
				onClick={onOpen}
				tooltip={__('assign tickets')}
				tooltipProps={tooltipProps}
			/>
		</ItemCount>
	);
};

export default withIsLoaded<EntityListItemProps<Datetime>>(TypeName.tickets, ({ entity, loaded }) => {
	/* Hide TAM unless tickets are loaded */
	return loaded && <AssignTicketsButton entity={entity} />;
});
