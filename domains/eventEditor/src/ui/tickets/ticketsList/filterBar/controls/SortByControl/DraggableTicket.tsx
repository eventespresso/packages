import { format } from 'date-fns';

import { CurrencyDisplay } from '@eventespresso/ee-components';
import { Ticket } from '@eventespresso/edtr-services';

const DraggableTicket: React.FC<Ticket> = ({ dbId, endDate, name, price, startDate }) => (
	<>
		<span>{dbId})</span>
		<span>{name}: </span>
		<span>
			<CurrencyDisplay value={price} />
		</span>
		<span>-</span>
		<span>{format(new Date(startDate), 'LLL')}</span>
		<span>
			{format(new Date(startDate), 'd')} - {format(new Date(endDate), 'd')}
		</span>
		<span>{format(new Date(endDate), 'yyyy')}</span>
	</>
);

export default DraggableTicket;
