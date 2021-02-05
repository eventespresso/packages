import { gql } from '@apollo/client';

export const GET_GENERAL_SETTINGS: any = gql`
	query GET_GENERAL_SETTINGS {
		generalSettings {
			dateFormat
			timeFormat
			timezone
		}
	}
`;
