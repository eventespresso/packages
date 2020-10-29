import gql from 'graphql-tag';

export const EVENT_ATTRIBUTES: any = gql`
	fragment eventAttributes on EspressoEvent {
		id
		dbId
		cacheId
		allowDonations
		allowOverflow
		altRegPage
		created
		description
		displayDescription
		displayTicketSelector
		isActive
		isCancelled
		isExpired
		isInactive
		isPostponed
		isSoldOut
		isUpcoming
		maxRegistrations
		memberOnly
		name
		order
		phoneNumber
		shortDescription
		status
		timezoneString
		visibleOn
		manager {
			id
			name
		}
	}
`;

export const GET_EVENT: any = gql`
	query GET_EVENT($id: ID!) {
		espressoEvent(id: $id, idType: DATABASE_ID) {
			...eventAttributes
		}
	}
	${EVENT_ATTRIBUTES}
`;
