import React from 'react';

import useLimitsWarning from './useLimitsWarning';

const Warning: React.FC = () => {
	const warning = useLimitsWarning();

	return warning && <p className={'rem-max-event-dates-warning'}>{warning}</p>;
};

export default Warning;
