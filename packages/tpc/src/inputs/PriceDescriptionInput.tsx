import React from 'react';
import { __ } from '@eventespresso/i18n';

import { PriceField } from '../fields';
import type { PriceModifierProps } from '../types';

const PriceDescriptionInput: React.FC<PriceModifierProps> = ({ price }) => {
	return (
		<PriceField
			aria-label={__('price description')}
			component={'input'}
			// default prices cannot be changed in TPC
			disabled={price.isDefault}
			field='description'
			placeholder={__('description…')}
			price={price}
			type={'text'}
		/>
	);
};

export default PriceDescriptionInput;
