import React from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { useDateRecurrence } from '../services/apollo';

type RecurrenceTagProps = {
	datetime: Datetime;
};

const RecurrenceTag: React.FC<RecurrenceTagProps> = ({ datetime }) => {
	const dateRecurrence = useDateRecurrence(datetime?.id);
	if (!dateRecurrence) {
		return null;
	}
	// TODO use `getRRuleText()` here
	return <div>{dateRecurrence?.rRule}</div>;
};

export default RecurrenceTag;
