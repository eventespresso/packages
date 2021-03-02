import { useDomData } from '../../hooks';

export const useUpsellAdId = (): number => {
	return useDomData()?.upsellAd?.dbId || 0;
};
