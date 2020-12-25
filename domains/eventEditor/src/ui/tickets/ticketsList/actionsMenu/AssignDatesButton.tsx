import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { Calendar } from '@eventespresso/icons';
import { IconButton, EntityListItemProps, ItemCount } from '@eventespresso/ui-components';
import { useRelatedDatetimes, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { TypeName } from '@eventespresso/services';
import { withIsLoaded } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import type { Ticket } from '@eventespresso/edtr-services';
import type { TooltipProps } from '@eventespresso/adapters';
import { useGlobalModal } from '@eventespresso/registry';

import { BaseProps } from '@edtrUI/ticketAssignmentsManager';

const AssignDatesButton: React.FC<EntityListItemProps<Ticket>> = ({ entity }) => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);

	const relatedDatetimes = useRelatedDatetimes({
		entity: 'tickets',
		entityId: entity.id,
	});

	const count = relatedDatetimes.length;

	const title = count
		? __('Number of related dates')
		: __(
				'There are no event dates assigned to this ticket. Please click the calendar icon to update the assignments.'
		  );

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'left' });

	const onOpen = useCallback(() => {
		openWithData({ entity, assignmentType: 'forTicket' });
	}, [entity, openWithData]);

	return (
		<ItemCount count={count} emphasizeZero title={title} zeroCountChar='!'>
			<IconButton
				borderless
				icon={Calendar}
				onClick={onOpen}
				tooltip={__('assign dates')}
				tooltipProps={tooltipProps}
			/>
		</ItemCount>
	);
};

export default withIsLoaded<EntityListItemProps<Ticket>>(TypeName.datetimes, ({ entity, loaded }) => {
	/* Hide TAM unless dates are loaded */
	return loaded && <AssignDatesButton entity={entity} />;
});
