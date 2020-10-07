import React from 'react';
import { __ } from '@eventespresso/i18n';

import type { PriceModifierProps } from '../types';
import { PriceField } from '../fields';

const PriceDescriptionInput: React.FC<PriceModifierProps> = ({ price }) => {
	return (
		<PriceField
			aria-label={__('price description')}
			component={'input'}
			// default prices cannot be changed in TPC
			disabled={price.isDefault}
			field='description'
			placeholder={__('description...')}
			price={price}
			type={'text'}
		/>
	);
};

export default PriceDescriptionInput;
