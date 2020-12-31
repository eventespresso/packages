import type { Meta } from '@storybook/react/types-6-0';

import { __ } from '@eventespresso/i18n';
import { Calendar, CalendarOutlined, Repeat, Ticket } from '@eventespresso/icons';
import { Steps, Step } from './index';

export default {
	component: Steps,
	title: 'Components/Steps',
} as Meta;

const firstStepIcon = () => <Repeat noMargin size='big' />;

export const Default = () => (
	<Steps compact current={0} showStepNumber>
		<Step
			description={__('define how recurring dates are generated')}
			icon={firstStepIcon}
			title={__('Pattern Editor')}
		/>
		<Step description={__('primary information for generated dates')} icon={Calendar} title={__('Date Details')} />
		<Step description={__('create or add tickets for generated dates')} icon={Ticket} title={__('Tickets')} />
		<Step
			description={__('confirm final dates list and add or remove exceptions')}
			icon={CalendarOutlined}
			title={__('Generated Dates')}
		/>
	</Steps>
);
