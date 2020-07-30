import { GeneratedDate } from '../ui/generatedDates';
import { RemTicket } from '../data';

export type Progress = {
	//  normally represents the number of entities processed
	datetimes: number;
	tickets: number;
};

export type GetProgressArgs = {
	generatedDates: Array<GeneratedDate>;
	sharedTickets: Array<RemTicket>;
	nonSharedTickets: Array<RemTicket>;
	progress: Progress;
};

export const getTotalProgress = ({
	sharedTickets,
	nonSharedTickets,
	generatedDates,
	progress: { datetimes, tickets },
}: GetProgressArgs): number => {
	const sharedTicketsCount = sharedTickets.length;
	const nonSharedTicketsCount = nonSharedTickets.length;
	const generatedDatesCount = generatedDates.length;

	const totalItems = sharedTicketsCount + nonSharedTicketsCount * generatedDatesCount + generatedDatesCount;
	const totalProgress = datetimes + tickets;

	return (totalProgress / totalItems) * 100;
};

export default getTotalProgress;
