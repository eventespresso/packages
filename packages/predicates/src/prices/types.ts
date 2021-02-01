import type { Price } from '@eventespresso/edtr-services';

export type PricePred = (price: Price) => boolean;
