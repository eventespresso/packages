import React from 'react';
import { useFormState } from '../../data';

import { getLimitsWarning, useIsCountCapped } from '../../utils';

const Warning: React.FC = () => {
	const isCountCapped = useIsCountCapped();

	const { rRule } = useFormState();

	if (!isCountCapped) {
		return null;
	}
	const warning = getLimitsWarning(rRule);

	return <p className={'rem-max-event-dates-warning'}>{warning}</p>;
};

export default Warning;
