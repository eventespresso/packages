import React from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { useDateRecurrence } from '../services/apollo';

type RecurrenceTagProps = {
	datetime: Datetime;
	isTableView?: boolean;
};

const RecurrenceTag: React.FC<RecurrenceTagProps> = ({ datetime, isTableView }) => {
	const dateRecurrence = useDateRecurrence(datetime?.id);
	if (!dateRecurrence) {
		return null;
	}
	if (isTableView) {
		return <>{dateRecurrence.dbId}</>;
	}
	// TODO use `getRRuleText()` here
	return <div>{dateRecurrence?.rRule}</div>;
};

export default RecurrenceTag;
