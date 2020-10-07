import React from 'react';

import { __ } from '@eventespresso/i18n';
import { PriceField } from '../fields';
import type { PriceModifierProps } from '../types';

const PriceIdInput: React.FC<PriceModifierProps> = ({ price }) => {
	return (
		<PriceField aria-label={__('price id')} component={'input'} disabled field='dbId' price={price} type={'text'} />
	);
};

export default PriceIdInput;
