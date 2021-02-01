import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { CurrencyDisplay, SimpleTextEditorModal } from '@eventespresso/ee-components';
import { useConfig } from '@eventespresso/services';
import { getAdminUrl, useTicketMutator, useEventId } from '@eventespresso/edtr-services';

import { EditableName, EditablePrice } from '../editable';
import TicketDetailsPanel from './TicketDetailsPanel';

import type { TicketItemProps } from '../types';

const Details: React.FC<Partial<TicketItemProps>> = ({ entity: ticket }) => {
	const { siteUrl } = useConfig();

	const adminUrl = useMemo(() => {
		return getAdminUrl({ adminSiteUrl: siteUrl.admin, page: ADMIN_ROUTES.REGISTRATIONS });
	}, [siteUrl.admin]);

	const eventId = useEventId();

	const { updateEntity } = useTicketMutator(ticket.id);

	const onUpdate = useCallback(
		(description: string): void => {
			updateEntity({ description });
		},
		[updateEntity]
	);

	return (
		<>
			<EditableName className={'entity-card-details__name'} entity={ticket} />

			<SimpleTextEditorModal
				className='entity-card-details__text'
				onUpdate={onUpdate}
				text={ticket.description}
				title={__('Edit description')}
				tooltip={__('edit description…')}
			/>

			{ticket.sold ? (
				<CurrencyDisplay className='entity-card-details__price' value={ticket.price} />
			) : (
				<EditablePrice className='entity-card-details__price' entity={ticket} />
			)}

			<TicketDetailsPanel adminUrl={adminUrl} entity={ticket} eventId={eventId} />
		</>
	);
};

export default Details;
