import { gql } from '@eventespresso/data';

export const CREATE_FORM_SECTION = gql`
	mutation CREATE_FORM_SECTION($input: CreateEspressoFormSectionInput!) {
		createEspressoFormSection(input: $input) {
			espressoFormSection {
				id
			}
		}
	}
`;

export const UPDATE_FORM_SECTION = gql`
	mutation UPDATE_FORM_SECTION($input: UpdateEspressoFormSectionInput!) {
		updateEspressoFormSection(input: $input) {
			espressoFormSection {
				id
			}
		}
	}
`;

export const DELETE_FORM_SECTION = gql`
	mutation DELETE_FORM_SECTION($input: DeleteEspressoFormSectionInput!) {
		deleteEspressoFormSection(input: $input) {
			espressoFormSection {
				id
			}
		}
	}
`;

export const CREATE_FORM_ELEMENT = gql`
	mutation CREATE_FORM_ELEMENT($input: CreateEspressoFormElementInput!) {
		createEspressoFormElement(input: $input) {
			espressoFormElement {
				id
			}
		}
	}
`;

export const UPDATE_FORM_ELEMENT = gql`
	mutation UPDATE_FORM_ELEMENT($input: UpdateEspressoFormElementInput!) {
		updateEspressoFormElement(input: $input) {
			espressoFormElement {
				id
			}
		}
	}
`;

export const DELETE_FORM_ELEMENT = gql`
	mutation DELETE_FORM_ELEMENT($input: DeleteEspressoFormElementInput!) {
		deleteEspressoFormElement(input: $input) {
			espressoFormElement {
				id
			}
		}
	}
`;
