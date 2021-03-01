import { gql } from '@eventespresso/data';

export const UPSELL_ATTRIBUTES: any = gql`
	fragment upsellAdAttributes on EspressoUpsellAd {
		id
		dbId
		actionHook
		altCTALink
		altCTAStyle
		altCTAText
		cTA
		cTALink
		cTAStyle
		containerClass
		image
		isDismissable
		mainText
		mainTitle
		orientation
		page
		pagenow
		postType
		route
		showForCaps
		subTitle
		templateId: theme
	}
`;

export const GET_UPSELL: any = gql`
	query GET_UPSELL($id: ID!) {
		espressoUpsellAd(id: $id, idType: DATABASE_ID) {
			...upsellAdAttributes
		}
	}
	${UPSELL_ATTRIBUTES}
`;
