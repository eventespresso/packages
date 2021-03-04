import { gql } from '@eventespresso/data';

export const UPSELL_AD_ATTRIBUTES: any = gql`
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
		excludedCaps
		image
		isDismissable
		isForEventEditor
		location
		mainText
		mainTitle
		orientation
		page
		pagenow
		postType
		route
		showForCaps
		subTitle
		templateId
	}
`;

export const GET_UPSELL_AD: any = gql`
	query GET_UPSELL($id: ID!) {
		espressoUpsellAd(id: $id, idType: DATABASE_ID) {
			...upsellAdAttributes
		}
	}
	${UPSELL_AD_ATTRIBUTES}
`;
