import React, { useMemo } from 'react';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@eventespresso/i18n';

import { EntityDbId } from '@eventespresso/data';

import { Link } from '../../';

import './style.scss';

interface Props {
	adminUrl: string;
	dbId: EntityDbId;
	eventId: number;
	sold?: number;
	type: 'date' | 'ticket';
}

const EntityDetailsPanelSold: React.FC<Props> = ({ adminUrl, eventId, sold = 0, type, ...props }) => {
	const dbId = useMemo(() => (type === 'date' ? { datetime_id: props.dbId } : { ticket_id: props.dbId }), [
		props.dbId,
		type,
	]);

	const regListUrl = useMemo(() => {
		return addQueryArgs(adminUrl, {
			event_id: eventId,
			_reg_status: 'RAP',
			return: 'edit',
			...{ dbId },
		});
	}, [adminUrl, dbId, eventId]);

	const tooltip =
		type === 'date'
			? __('view approved registrations for this date.')
			: __('view approved registrations for this ticket.');

	return (
		<Link className='entity-sold' href={regListUrl} tooltip={tooltip}>
			{sold}
		</Link>
	);
};

export default EntityDetailsPanelSold;
