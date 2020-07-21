import React, { useCallback } from 'react';

import { useDataState } from '../data';
import BaseField from './BaseField';
import type { BaseFieldProps, PriceFieldProps } from './types';

type BFP = BaseFieldProps;

const PriceField: React.FC<PriceFieldProps> = ({ field, price, ...rest }) => {
	const { updatePrice } = useDataState();

	const getValue: BFP['getValue'] = useCallback(() => price[field], [field, price]);

	const setValue: BFP['setValue'] = useCallback(
		(value) => {
			updatePrice({ id: price.id, fieldValues: { [field]: value } });
		},
		[updatePrice, price.id, field]
	);

	return <BaseField {...rest} getValue={getValue} setValue={setValue} name={field} />;
};

export default PriceField;
