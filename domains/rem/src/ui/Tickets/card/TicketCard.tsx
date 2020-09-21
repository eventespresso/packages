import React from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import { CurrencyInput, SimpleEntityCard } from '@eventespresso/components';
import { LOCALIZED_DATE_AND_TIME_SHORT_FORMAT } from '@eventespresso/constants';
import { useTimeZoneTime } from '@eventespresso/services';
import { DATE_INTERVALS } from '@eventespresso/dates';

import Sidebar from './Sidebar';
import { useFormState } from '../../../data';

import type { BaseProps } from '../types';

const TicketCard: React.FC<BaseProps> = ({ ticket }) => {
	const { tickets } = useFormState();
	const { formatForSite } = useTimeZoneTime();

	const { isShared, ticketSalesDates, ticketSalesStart, ticketSalesEnd } = tickets?.[ticket.id];

	const beforeDetails = <CurrencyInput id={ticket.id} amount={ticket.price} tag='h5' vertical />;

	const afterDetails = ticketSalesStart && ticketSalesEnd && (
		<div className='ee-ticket-offset'>
			<div className={'ee-ticket-offset__label'}>{__('starts')}</div>
			<div className={'ee-ticket-offset__date'}>
				{isShared && formatForSite(ticketSalesDates.startDate as Date, LOCALIZED_DATE_AND_TIME_SHORT_FORMAT)}
				{!isShared &&
					sprintf(
						/* translators:
					1. interval value, like 10 in "10 days", 15 in "15 minutes"
					2. the interval e.g. "days", "weeks"
					3. position (before/after) with respect to start or end date
					4. the date ("start" or "end") for which the position is sepcified
					The final string may look like this:
					"3 days before the start date"
					*/
						__('%1$d %2$s %3$s the %4$s date'),
						ticketSalesStart?.unitValue,
						DATE_INTERVALS?.[ticketSalesStart?.unit],
						ticketSalesStart?.position === 'before' ? __('before') : __('after'),
						ticketSalesStart?.startOrEnd === 'start' ? __('start') : __('end')
					)}
			</div>
			<div className={'ee-ticket-offset__label'}>{__('ends')}</div>
			<div className={'ee-ticket-offset__date'}>
				{isShared && formatForSite(ticketSalesDates.startDate as Date, LOCALIZED_DATE_AND_TIME_SHORT_FORMAT)}
				{!isShared &&
					sprintf(
						/* translators:
					1. interval value, like 10 in "10 days", 15 in "15 minutes"
					2. the interval e.g. "days", "weeks"
					3. position (before/after) with respect to start or end date
					4. the date ("start" or "end") for which the position is sepcified
					The final string may look like this:
					"3 days before the end date"
					*/
						__('%1$d %2$s %3$s the %4$s date'),
						ticketSalesEnd?.unitValue,
						DATE_INTERVALS?.[ticketSalesEnd?.unit],
						ticketSalesEnd?.position === 'before' ? __('before') : __('after'),
						ticketSalesEnd?.startOrEnd === 'start' ? __('start') : __('end')
					)}
			</div>
		</div>
	);

	const sidebar = <Sidebar ticket={ticket} />;

	return (
		<SimpleEntityCard
			afterDetails={afterDetails}
			beforeDetails={beforeDetails}
			id={ticket.id}
			name={ticket.name}
			sidebar={sidebar}
		/>
	);
};

export default React.memo(TicketCard);
