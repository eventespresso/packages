import { __, sprintf } from '@eventespresso/i18n';
import { Tag } from '@eventespresso/ui-components';
import { Repeat } from '@eventespresso/icons';
import { getRuleTextWithStartingDate } from '@eventespresso/rrule-generator';

import type { EntityId } from '@eventespresso/data';
import { useDateRecurrence } from '../services/apollo';

type RecurrenceTagProps = {
	datetimeId: EntityId;
	isTableView?: boolean;
};

const RecurrenceTag: React.FC<RecurrenceTagProps> = ({ datetimeId, isTableView }) => {
	const dateRecurrence = useDateRecurrence(datetimeId);
	const recurrenceId = dateRecurrence?.dbId;
	const ruleText = getRuleTextWithStartingDate(dateRecurrence?.rRule);

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
