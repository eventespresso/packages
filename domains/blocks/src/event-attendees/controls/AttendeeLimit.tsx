import React, { useCallback, useMemo } from 'react';
import { TextControl } from '@wordpress/components';
import { __, _n, sprintf } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import { useAttendees } from '@blocksServices/apollo/queries';
import { getAttendeesOrderBy } from '@blocksServices/utils';

const AttendeeLimit: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { ticket, status, limit, orderBy, order } = attributes;
	const whereArgs = useMemo(
		() => ({
			orderby: getAttendeesOrderBy(orderBy, order),
			regTicket: ticket,
			regStatus: status,
		}),
		[order, orderBy, status, ticket]
	);
	const { data } = useAttendees(whereArgs, limit);

	const attendeesCount = data?.espressoAttendees?.nodes?.length || 0;

	const onChange = useCallback((limit): void => setAttributes({ limit: parseInt(limit, 10) }), [setAttributes]);
	return (
		<TextControl
			type='number'
			value={limit}
			label={__('Number of Attendees to Display:')}
			min={1}
			onChange={onChange}
			help={sprintf(
				_n(
					'Used to adjust the number of attendees displayed (There is %d total attendee for the current filter settings).',
					'Used to adjust the number of attendees displayed (There are %d total attendees for the current filter settings).',
					attendeesCount
				),
				attendeesCount
			)}
		/>
	);
};

export default AttendeeLimit;
