import React, { useMemo } from 'react';
import { Placeholder, Spinner } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from './types';
import { useAttendees } from '@blocksServices/apollo';
import AttendeesList from './AttendeesList';
import { CSS_CLASS_CORE_BLOCKS } from '../constants';
import { getAttendeesOrderBy } from '@blocksServices/utils';

const isNewBlock = ({ event, datetime, ticket }: AttendeesEditProps['attributes']): boolean => {
	return !(event || datetime || ticket);
};

const AttendeesDisplay: React.FC<AttendeesEditProps> = ({ attributes }) => {
	const { datetime, event, ticket, status, limit, orderBy, order } = attributes;
	const whereArgs = useMemo(
		() => ({
			datetime,
			event,
			orderby: getAttendeesOrderBy(orderBy, order),
			regTicket: ticket,
			regStatus: status,
		}),
		[datetime, event, order, orderBy, status, ticket]
	);
	const { data, loading, error } = useAttendees(whereArgs, limit);

	const attendees = useMemo(() => data?.espressoAttendees?.nodes || [], [data?.espressoAttendees?.nodes]);

	if (loading) {
		return (
			<Placeholder>
				<Spinner />
			</Placeholder>
		);
	}

	if (error) {
		return <Placeholder>{__('There was some error fetching attendees list')}</Placeholder>;
	}

	if (isNewBlock(attributes) && !attendees.length) {
		return (
			<Placeholder>
				{__('To get started, select what event you want to show attendees from in the block settings.')}
			</Placeholder>
		);
	}

	if (!attendees.length) {
		return <Placeholder>{__('There are no attendees for selected options.')}</Placeholder>;
	}

	const { showGravatar, avatarSize } = attributes;

	return (
		<AttendeesList
			attendees={attendees}
			showGravatar={showGravatar}
			avatarSize={avatarSize}
			containerClassName={CSS_CLASS_CORE_BLOCKS}
			containerId={'ee-block-event-attendees'}
		/>
	);
};

export default AttendeesDisplay;
