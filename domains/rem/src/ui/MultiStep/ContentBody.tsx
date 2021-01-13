import { useTickets } from '@eventespresso/edtr-services';

import { TicketTemplates } from '@eventespresso/ee-components';
import { PatternEditor } from '../recurrence';
import { DatetimeDetails } from '../datetimeDetails';
import { GeneratedDates } from '../generatedDates';
import Steps from './Steps';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';

const ContentBody: React.FC = () => {
	const { addTicket, tickets } = useFormState();
	const defaultTickets = useTickets();

	const { current } = useStepsState();

	return (
		<>
			<Steps current={current} />
			{current === 0 && <PatternEditor />}
			{current === 1 && <DatetimeDetails />}
			{current === 2 && (
				<TicketTemplates addTicket={addTicket} defaultTickets={defaultTickets} ticketTemplates={tickets} />
			)}
			{current === 3 && <GeneratedDates />}
		</>
	);
};

export default ContentBody;
