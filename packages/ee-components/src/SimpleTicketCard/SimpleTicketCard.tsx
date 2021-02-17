import { __ } from '@eventespresso/i18n';
import { SimpleEntityCard } from '@eventespresso/ui-components';
import { isSB } from '@eventespresso/constants';

import { CurrencyDisplay } from '../CurrencyDisplay';
import Sidebar from './Sidebar';
import type { SimpleTicketCardProps } from './types';

import './style.scss';

export const SimpleTicketCard: React.FC<SimpleTicketCardProps> = ({
	deleteButtonProps,
	editButtonProps,
	entity: ticket,
	onDelete,
	onEdit,
	renderEndDate,
	renderStartDate,
	showAfterDetails = true,
}) => {
	const beforeDetails = isSB ? null : <CurrencyDisplay value={ticket.price} vertical />;

	const afterDetails = showAfterDetails && (
		<div className='ee-ticket-offset'>
			{renderStartDate && (
				<>
					<div className={'ee-ticket-offset__label'}>{__('starts')}</div>
					<div className={'ee-ticket-offset__date'}>{renderStartDate?.(ticket)}</div>
				</>
			)}

			{renderEndDate && (
				<>
					<div className={'ee-ticket-offset__label'}>{__('ends')}</div>
					<div className={'ee-ticket-offset__date'}>{renderEndDate?.(ticket)}</div>
				</>
			)}
		</div>
	);

	const sidebar = (
		<Sidebar
			deleteButtonProps={deleteButtonProps}
			editButtonProps={editButtonProps}
			onDelete={onDelete}
			onEdit={onEdit}
			entity={ticket}
		/>
	);

	return (
		<SimpleEntityCard
			afterDetails={afterDetails}
			beforeDetails={beforeDetails}
			className='ee-simple-ticket-card'
			id={ticket.id}
			name={ticket.name}
			sidebar={sidebar}
		/>
	);
};
