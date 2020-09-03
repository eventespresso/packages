import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { RichTextEditorModal } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/utils';
import { useConfig } from '@eventespresso/services';
import { getAdminUrl, useDatetimeMutator, useEventId } from '@eventespresso/edtr-services';

import DateDetailsPanel from './DateDetailsPanel';
import { EditableName } from '../editable';

import type { DateItemProps } from '../types';

const Details: React.FC<DateItemProps> = ({ entity: datetime }) => {
	const {
		siteUrl: { admin },
	} = useConfig();

	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });

	const eventId = useEventId();

	const { updateEntity } = useDatetimeMutator(datetime.id);

	const onUpdate = useCallback(
		(description: string): void => {
			updateEntity({ description });
		},
		[updateEntity]
	);

	return (
		<>
			<EditableName className='entity-card-details__name' entity={datetime} />

			<RichTextEditorModal
				className='entity-card-details__text'
				onUpdate={onUpdate}
				text={datetime.description}
				title={__('Edit description')}
				tooltip={__('edit description...')}
			/>

			<DateDetailsPanel adminUrl={adminUrl} entity={datetime} eventId={eventId} />
		</>
	);
};

export default React.memo(Details, getPropsAreEqual(['entity', 'cacheId']));
