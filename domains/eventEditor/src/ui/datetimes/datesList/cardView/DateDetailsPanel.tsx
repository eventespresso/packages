import React from 'react';
import { __ } from '@eventespresso/i18n';

import { EntityDetailsPanel, EntityDetailsPanelSold } from '@eventespresso/components';
import DateRegistrationsLink from '../../DateRegistrationsLink';
import DateCapacity from './DateCapacity';
import { getPropsAreEqual } from '@eventespresso/utils';
import type { DateItemProps } from '../types';

const DateDetailsPanel: React.FC<DateItemProps> = ({ adminUrl, entity: datetime, eventId }) => {
	const details = [
		{
			id: 'ee-event-date-sold',
			label: __('sold'),
			value: (
				<EntityDetailsPanelSold
					adminUrl={adminUrl}
					dbId={datetime.dbId}
					eventId={eventId}
					sold={datetime.sold}
					type='date'
				/>
			),
		},
		{
			id: 'ee-event-date-capacity',
			label: __('capacity'),
			value: <DateCapacity entity={datetime} />,
		},
		{
			id: 'ee-event-date-registrations',
			className: 'ee-has-tooltip',
			label: __('reg list'),
			value: <DateRegistrationsLink datetime={datetime} />,
		},
	];

	return <EntityDetailsPanel details={details} className='ee-editor-date-details-sold-rsrvd-cap-div' />;
};

export default React.memo(DateDetailsPanel, getPropsAreEqual(['entity', 'cacheId']));
