import React from 'react';

import type { PriceModifierProps } from '../types';
import { PriceField } from '../fields';

const PriceIdInput: React.FC<PriceModifierProps> = ({ price }) => {
	return <PriceField component={'input'} disabled field='dbId' price={price} type={'text'} />;
};

export default PriceIdInput;
