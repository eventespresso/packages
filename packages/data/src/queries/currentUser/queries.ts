import { gql } from '@apollo/client';

export const GET_CURRENT_USER: any = gql`
	query GET_CURRENT_USER {
		viewer {
			id
			description
			email
			firstName
			lastName
			locale
			name
			nicename
			nickname
			username
		}
	}
`;
