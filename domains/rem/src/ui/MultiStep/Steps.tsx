import React from 'react';
import { __ } from '@wordpress/i18n';

import { Steps as StepsAdapter, Step } from '@eventespresso/adapters';
import type { PrevNext } from '@eventespresso/hooks';
import { Calendar, CalendarOutlined, Repeat, Ticket } from '@eventespresso/icons';

const Steps: React.FC<Pick<PrevNext, 'current'>> = ({ current }) => {
	return (
		<StepsAdapter compact current={current} showStepNumber>
			<Step
				className={'ee-rem-form-step-pattern-editor'}
				description={__('define how recurring dates are generated')}
				icon={Repeat}
				title={__('Pattern Editor')}
			/>
			<Step
				description={__('primary information for generated dates')}
				icon={Calendar}
				title={__('Date Details')}
			/>
			<Step description={__('create or add tickets for generated dates')} icon={Ticket} title={__('Tickets')} />
			<Step
				description={__('confirm final dates list and add or remove exceptions')}
				icon={CalendarOutlined}
				title={__('Generated Dates')}
			/>
		</StepsAdapter>
	);
};

export default Steps;
