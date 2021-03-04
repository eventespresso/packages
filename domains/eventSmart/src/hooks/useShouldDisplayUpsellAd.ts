import { useCallback } from 'react';
import { useCurrentUserCan } from '@eventespresso/services';

import { UpsellAd } from '../types';
import { capsStr2Array } from '../utils';

export type ShouldDisplayUpsellAd = (upsellAd: UpsellAd) => boolean;

/**
 * Whether upsell should be displayed for the current user
 * based on the capabilities
 */
export const useShouldDisplayUpsellAd = (): ShouldDisplayUpsellAd => {
	const currentUserCan = useCurrentUserCan();

	return useCallback(
		({ excludedCaps, showForCaps }) => {
			let caps = capsStr2Array(excludedCaps);
			if (caps.length) {
				for (const cap of caps) {
					// if any capability is excluded from being shown
					if (currentUserCan(cap)) {
						return false;
					}
				}
			}
			caps = capsStr2Array(showForCaps);
			if (caps.length) {
				for (const cap of caps) {
					// if any capability allows to show the upsell
					if (currentUserCan(cap)) {
						return true;
					}
				}
			}
			return false;
		},
		[currentUserCan]
	);
};
