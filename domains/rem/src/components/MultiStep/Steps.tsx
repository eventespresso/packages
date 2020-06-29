import React from 'react';
import { __ } from '@wordpress/i18n';

import { Steps as StepsAdapter, Step } from '@eventespresso/adapters';
import { PrevNext } from '@eventespresso/services';
import { Calendar, Ticket } from '@eventespresso/icons';

const Steps: React.FC<Pick<PrevNext, 'current'>> = ({ current }) => {
	return (
		<StepsAdapter current={current} showStepNumber>
			<Step icon={Calendar} title={__('Exclusion Pattern')} />
			<Step icon={} title={__('Date Details')} />
			<Step icon={Ticket} title={__('Tickets')} />
			<Step icon={} title={__('Generated Dates')} />
		</StepsAdapter>
	);
};

export default Steps;
