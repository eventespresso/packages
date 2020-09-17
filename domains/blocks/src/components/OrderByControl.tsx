import React from 'react';
import { SelectControl } from '@wordpress/components';
import { __ } from '@eventespresso/i18n';

import type { SelectControlProps } from './types';

interface OrderByControlProps extends SelectControlProps {
	setOrderBy?: (order: string) => void;
	orderBy: string;
}

const OrderByControl: React.FC<OrderByControlProps> = ({ orderBy, setOrderBy, options, ...rest }) => {
	return <SelectControl label={__('Order by')} onChange={setOrderBy} options={options} value={orderBy} {...rest} />;
};

export default OrderByControl;
