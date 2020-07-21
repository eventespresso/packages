import { Price } from '@eventespresso/edtr-services';

const defaultPriceModifier: Price = {
	id: '',
	dbId: 0,
	cacheId: '',
	amount: null,
	description: '',
	isBasePrice: false,
	isDefault: false,
	isDiscount: false,
	isPercent: false,
	isTax: false,
	isTrashed: false,
	name: '',
	order: 999,
	overrides: null,
};

export default defaultPriceModifier;
