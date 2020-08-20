import React from 'react';

import { ADMIN_ROUTES } from '@eventespresso/constants';
import { getPropsAreEqual, useConfig } from '@eventespresso/services';
import { getAdminUrl, useDatetimeMutator, useEventId } from '@eventespresso/edtr-services';

import DateDetailsPanel from './DateDetailsPanel';
import { EditableDesc } from '../../../shared/editable';
import { EditableName } from '../editable';

import type { DateItemProps } from '../types';

const Details: React.FC<DateItemProps> = ({ entity: datetime }) => {
	const {
		siteUrl: { admin },
	} = useConfig();

	const adminUrl = getAdminUrl({ adminSiteUrl: admin, page: ADMIN_ROUTES.REGISTRATIONS });

	const eventId = useEventId();

	const { updateEntity } = useDatetimeMutator(datetime.id);

	return (
		<>
			<EditableName className='entity-card-details__name' entity={datetime} />

			<EditableDesc description={datetime.description} updateEntity={updateEntity} />

			<DateDetailsPanel adminUrl={adminUrl} entity={datetime} eventId={eventId} />
		</>
	);
};

export default React.memo(Details, getPropsAreEqual(['entity', 'cacheId']));
