import React from 'react';

import { __, sprintf } from '@eventespresso/i18n';
import { Tag } from '@eventespresso/components';
import { Repeat } from '@eventespresso/icons';
import { getRuleText } from '@eventespresso/rrule-generator';

import type { Datetime } from '@eventespresso/edtr-services';
import { useDateRecurrence } from '../services/apollo';

type RecurrenceTagProps = {
	datetime: Datetime;
	isTableView?: boolean;
};

const RecurrenceTag: React.FC<RecurrenceTagProps> = ({ datetime, isTableView }) => {
	const dateRecurrence = useDateRecurrence(datetime?.id);
	const recurrenceId = dateRecurrence?.dbId;
	const ruleText = getRuleText(dateRecurrence?.rRule);

	if (!dateRecurrence) {
		return null;
	}

	const color = isTableView ? null : 'blue-green';
	const colorContrast = isTableView ? null : 'high';
	const icon = isTableView ? null : <Repeat />;

	return (
		<Tag color={color} colorContrast={colorContrast} icon={icon} tooltip={ruleText}>
			{isTableView
				? recurrenceId
				: sprintf(
						/* translators: %s recurrence dbId */
						__('recurring series #%s'),
						recurrenceId
				  )}
		</Tag>
	);
};

export default RecurrenceTag;
