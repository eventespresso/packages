import { gql } from '@eventespresso/data';

export const TICKET_ATTRIBUTES: any = gql`
	fragment blocksTicketAttributes on EspressoTicket {
		id
		dbId
		cacheId
		name
	}
`;

export const GET_TICKETS: any = gql`
	query GET_TICKETS($first: Int, $where: EspressoRootQueryTicketsConnectionWhereArgs) {
		espressoTickets(first: $first, where: $where) {
			nodes {
				...blocksTicketAttributes
			}
		}
	}
	${TICKET_ATTRIBUTES}
`;
