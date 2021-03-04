import { useMemo } from 'react';
import { EventSmartDomData } from '../types';

export const useEdtrUpsellAds = (): EventSmartDomData['edtrUpsellAds'] => {
	return useMemo(() => window.eventEspressoData?.eventSmart?.edtrUpsellAds || [], []);
};
