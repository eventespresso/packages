import { useCallback } from 'react';
import * as R from 'ramda';

import { EdtrSlots } from '@eventespresso/services';

import { UpsellAd } from '../types';
import { useEdtrUpsellAds } from './useEdtrUpsellAds';

export type GetUpsell4Slot = (slot: EdtrSlots) => UpsellAd;

export const useUpsellAd4Slot = (): GetUpsell4Slot => {
	const { upsellAds } = useEdtrUpsellAds();

	return useCallback((slot) => R.find<UpsellAd>(R.propEq('location', slot), upsellAds), [upsellAds]);
};
