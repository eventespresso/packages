import { useCallback } from 'react';
import * as R from 'ramda';
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
			// if any capability is excluded from being shown
			if (caps.length && R.any(currentUserCan, caps)) {
				return false;
			}
			caps = capsStr2Array(showForCaps);
			// if any capability allows to show the upsell
			if (!caps.length || R.any(currentUserCan, caps)) {
				return true;
			}
			return false;
		},
		[currentUserCan]
	);
};
