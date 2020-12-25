import { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';

import { EntityDetailsPanel, EntityDetailsPanelSold } from '@eventespresso/ui-components';
import DateRegistrationsLink from '../../DateRegistrationsLink';
import DateCapacity from './DateCapacity';
import type { DateItemProps } from '../types';

const DateDetailsPanel: React.FC<DateItemProps> = ({ adminUrl, entity: datetime, eventId }) => {
	const details = useMemo(
		() => [
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
		],
		[adminUrl, datetime, eventId]
	);

	return <EntityDetailsPanel details={details} className='ee-editor-date-details-sold-rsrvd-cap-div' />;
};

export default DateDetailsPanel;
