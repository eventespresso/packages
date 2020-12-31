import { __ } from '@eventespresso/i18n';
import { Steps as StepsAdapter, Step } from '@eventespresso/ui-components';
import { Calendar, CalendarOutlined, Repeat, Ticket } from '@eventespresso/icons';
import type { PrevNext } from '@eventespresso/hooks';

const firstStepIcon = () => <Repeat noMargin size='bigger' />;

const Steps: React.FC<Pick<PrevNext, 'current'>> = ({ current }) => {
	return (
		<StepsAdapter compact current={current} showStepNumber>
			<Step
				description={__('define how recurring dates are generated')}
				icon={firstStepIcon}
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
