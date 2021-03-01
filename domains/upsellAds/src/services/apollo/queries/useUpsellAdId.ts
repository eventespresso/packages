export const useUpsellAdId = (): number => {
	return window.eventEspressoData?.upsellAdEditor?.upsellAd?.dbId || 0;
};
