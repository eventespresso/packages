import React from 'react';
import { __ } from '@wordpress/i18n';

import { Steps as StepsAdapter, Step } from '@eventespresso/adapters';
import type { PrevNext } from '@eventespresso/hooks';
import { Calendar, Ticket, CalendarOutlined } from '@eventespresso/icons';

const Steps: React.FC<Pick<PrevNext, 'current'>> = ({ current }) => {
	return (
		<StepsAdapter compact current={current} showStepNumber>
			<Step
				description={__('define how recurring dates are generated')}
				icon={Calendar}
				title={__('Pattern Editor')}
			/>
			<Step
				description={__('use existing date as template or create a new one')}
				icon={Calendar}
				title={__('Date Details')}
			/>
			<Step
				description={__('use existing tickets as templates or create a new one')}
				icon={Ticket}
				title={__('Tickets')}
			/>
			<Step
				description={__('confirm dates to be created and add or remove exceptions')}
				icon={CalendarOutlined}
				title={__('Generated Dates')}
			/>
		</StepsAdapter>
	);
};

export default Steps;
