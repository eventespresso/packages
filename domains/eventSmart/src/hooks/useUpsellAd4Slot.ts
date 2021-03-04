import { find, propEq } from 'ramda';

import { useCallback } from 'react';
import { EdtrSlots } from '@eventespresso/services';

import { UpsellAd } from '../types';
import { useEdtrUpsellAds } from './useEdtrUpsellAds';

export type GetUpsell4Slot = (slot: EdtrSlots) => UpsellAd;

export const useUpsellAd4Slot = (): GetUpsell4Slot => {
	const edtrUpsellAds = useEdtrUpsellAds();

	return useCallback((slot) => find<UpsellAd>(propEq('location', slot), edtrUpsellAds), [edtrUpsellAds]);
};
