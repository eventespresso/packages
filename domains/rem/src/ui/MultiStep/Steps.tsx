import React from 'react';
import { __ } from '@wordpress/i18n';

import { Steps as StepsAdapter, Step } from '@eventespresso/adapters';
import type { PrevNext } from '@eventespresso/hooks';
import { Calendar, Ticket, CalendarOutlined } from '@eventespresso/icons';

const Steps: React.FC<Pick<PrevNext, 'current'>> = ({ current }) => {
	return (
		<StepsAdapter compact current={current} showStepNumber>
			<Step icon={Calendar} title={__('Pattern Editor')} />
			<Step description={__('primary information about the date')} icon={Calendar} title={__('Date Details')} />
			<Step icon={Ticket} title={__('Tickets')} />
			<Step icon={CalendarOutlined} title={__('Generated Dates')} />
		</StepsAdapter>
	);
};

export default Steps;
