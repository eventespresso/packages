import { __ } from '@eventespresso/i18n';
import { SimpleEntityCard } from '@eventespresso/ui-components';

import { CurrencyDisplay } from '../CurrencyDisplay';
import Sidebar from './Sidebar';
import { SimpleTicketCardProps } from './types';

export const SimpleTicketCard: React.FC<SimpleTicketCardProps> = ({
	onDelete,
	onEdit,
	renderEndDate,
	renderStartDate,
	showAfterDetails = true,
	entity: ticket,
}) => {
	const beforeDetails = <CurrencyDisplay value={ticket.price} vertical />;

	const afterDetails = showAfterDetails && (
		<div className='ee-ticket-offset'>
			<div className={'ee-ticket-offset__label'}>{__('starts')}</div>
			<div className={'ee-ticket-offset__date'}>{renderStartDate?.(ticket)}</div>
			<div className={'ee-ticket-offset__label'}>{__('ends')}</div>
			<div className={'ee-ticket-offset__date'}>{renderEndDate?.(ticket)}</div>
		</div>
	);

	const sidebar = <Sidebar onDelete={onDelete} onEdit={onEdit} entity={ticket} />;

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
