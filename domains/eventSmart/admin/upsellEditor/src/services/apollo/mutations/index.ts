import { gql } from '@eventespresso/data';
import { UPSELL_AD_ATTRIBUTES } from '../queries';

export const UPDATE_UPSELL_AD = gql`
	mutation UPDATE_UPSELL_AD($input: UpdateEspressoUpsellAdInput!) {
		updateEspressoUpsellAd(input: $input) {
			espressoUpsellAd {
				...upsellAdAttributes
			}
		}
	}
	${UPSELL_AD_ATTRIBUTES}
`;

export { default as useUpsellAdMutator } from './useUpsellAdMutator';

export * from './types';
