// This is only a type import, which should be removed on compile
import type { UpsellAd } from '../../upsellEditor/src/services/apollo';

export interface EventSmartDomData {
	edtrUpsellAds?: Array<UpsellAd>;
}

export type { UpsellAd };
