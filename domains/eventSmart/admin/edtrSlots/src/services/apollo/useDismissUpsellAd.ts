import { EntityId, gql, useMutation } from '@eventespresso/data';
import { useCallback } from 'react';

const DISMISS_UPSELL_AD = gql`
	mutation DISMISS_UPSELL_AD($input: DismissUpsellAdInput!) {
		dismissUpsellAd(input: $input) {
			result
		}
	}
`;

type DismissUpsellAd = (id: EntityId) => Promise<void>;

export const useDismissUpsellAd = (): DismissUpsellAd => {
	const [mutate] = useMutation(DISMISS_UPSELL_AD);

	return useCallback(
		async (id) => {
			try {
				await mutate({
					variables: {
						input: {
							clientMutationId: 'DISMISS_UPSELL_AD',
							id,
						},
					},
				});
			} catch (error) {
				// Silent error
				console.error('DISMISS_UPSELL_AD', error);
			}
		},
		[mutate]
	);
};
