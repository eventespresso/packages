import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import AddPriceModifierButton from './AddPriceModifierButton';
import {
	defaultPriceModifier as defaultPrice,
	TPCPriceModifier,
	usePriceTypeForPrice,
	useTPCDataState,
	usePriceModifier,
} from '@eventespresso/edtr-services';
import type { PriceModifierProps } from '../types';

const AddPriceModifierButtonData: React.FC<Partial<PriceModifierProps>> = ({ index }) => {
	const defaultPriceModifier = usePriceModifier(defaultPrice);
	const baseType = usePriceTypeForPrice(defaultPriceModifier.id);

	const { addPrice } = useTPCDataState();

	const addPriceModifier = useCallback(() => {
		const newPrice: TPCPriceModifier = {
			...defaultPriceModifier,
			id: uuidv4(),
			isBasePrice: baseType.isBasePrice,
			isDiscount: baseType.isDiscount,
			isPercent: baseType.isPercent,
			isTax: baseType.isTax,
			order: baseType.order,
			isNew: true,
		};

		addPrice(newPrice, index + 1);
	}, [
		addPrice,
		baseType.isBasePrice,
		baseType.isDiscount,
		baseType.isPercent,
		baseType.isTax,
		baseType.order,
		defaultPriceModifier,
		index,
	]);
	return <AddPriceModifierButton addPriceModifier={addPriceModifier} />;
};
export default AddPriceModifierButtonData;
