import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getPropsAreEqual, useConfig } from '@eventespresso/services';
import { getAdminUrl, useTicketMutator, useEventId } from '@eventespresso/edtr-services';

import { RichTextEditorModal } from '@eventespresso/components';
import { useTicketMutator } from '@eventespresso/edtr-services';
import { EditableName, EditablePrice } from '../editable';
import TicketDetailsPanel from './TicketDetailsPanel';

import type { TicketItemProps } from '../types';

const Details: React.FC<Partial<TicketItemProps>> = ({ entity: ticket }) => {
	const {
		siteUrl: { admin },
	} = useConfig();

	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });

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

			<RichTextEditorModal
				textClassName='entity-card-details__text'
				onUpdate={onUpdate}
				text={ticket.description}
				title={__('Edit description')}
				tooltip={__('edit description...')}
			/>

			<EditablePrice className='entity-card-details__price' entity={ticket} />

			<TicketDetailsPanel adminUrl={adminUrl} entity={ticket} eventId={eventId} />
		</>
	);
};

export default React.memo(Details, getPropsAreEqual(['entity', 'cacheId']));
