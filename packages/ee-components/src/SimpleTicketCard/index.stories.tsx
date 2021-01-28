import type { Meta, Story } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { SimpleTicketCard } from './SimpleTicketCard';
import { SimpleTicketCardProps } from './types';

const ticket = {
	description: '',
	id: '2a142ec4-49a4-402f-b080-fade4e80ef96',
	isShared: false,
	name: 'Free Ticket 2',
	price: 0,
	quantity: 1,
	reverseCalculate: false,
	ticketSalesDates: {
		endDate: 'Sat Feb 27 2021 17:00:00 GMT+0200 (Eastern European Standard Time)',
		startDate: 'Sat Feb 27 2021 08:00:00 GMT+0200 (Eastern European Standard Time)',
	},
	ticketSalesEnd: {
		position: 'before',
		startOrEnd: 'start',
		unit: 'days',
		unitValue: 1,
	},
	ticketSalesStart: {
		position: 'before',
		startOrEnd: 'start',
		unit: 'months',
		unitValue: 1,
	},
};

export default {
	component: SimpleTicketCard,
	title: 'Components/SimpleTicketCard',
} as Meta;

type SimpleTicketCardStory = Story<SimpleTicketCardProps>;

const renderEndDate = () => '1 month(s) before the start date';
const renderStartDate = () => '1 month(s) before the start date';

export const Default: SimpleTicketCardStory = () => (
	<SimpleTicketCard
		entity={ticket as any}
		onDelete={noop}
		onEdit={noop}
		renderEndDate={renderEndDate}
		renderStartDate={renderStartDate}
	/>
);

export const DefaultRTE: SimpleTicketCardStory = () => (
	<div dir='rtl'>
		<SimpleTicketCard
			entity={ticket as any}
			onDelete={noop}
			onEdit={noop}
			renderEndDate={renderEndDate}
			renderStartDate={renderStartDate}
		/>
	</div>
);
