import { format } from 'date-fns';

import { Datetime } from '@eventespresso/edtr-services';

const DraggableTicket: React.FC<Datetime> = ({ dbId, endDate, name, startDate }) => (
	<>
		<span>{dbId})</span>
		<span>{name}: </span>
		<span>{format(new Date(startDate), 'LLL')}</span>
		<span>
			{format(new Date(startDate), 'd')} - {format(new Date(endDate), 'd')}
		</span>
		<span>{format(new Date(endDate), 'yyyy')}</span>
	</>
);

export default DraggableTicket;
