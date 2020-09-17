import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button } from '@eventespresso/adapters';
import { useAddDefaultPrices } from '../../hooks';

const AddDefaultPricesButton: React.FC = () => {
	const addDefaultPrices = useAddDefaultPrices();

	return <Button onClick={addDefaultPrices} buttonText={__('Add default prices')} size='lg' />;
};
export default AddDefaultPricesButton;
