import { CurrencyDisplay } from '@eventespresso/ee-components';
import { rangeFormat } from '@eventespresso/dates';
import { Ticket } from '@eventespresso/edtr-services';

const DraggableTicket: React.FC<Ticket> = ({ dbId, endDate, name, price, startDate }) => (
	<>
		<span>{dbId})</span>
		<span>{name}: </span>
		<span>
			<CurrencyDisplay value={price} />
		</span>
		<span>-</span>
		<span>
			{rangeFormat({
				formatTokens: { month: 'LLL' },
				range: [new Date(startDate), new Date(endDate)],
				showTime: true,
			})}
		</span>
	</>
);

export default DraggableTicket;
