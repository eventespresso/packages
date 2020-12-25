import React from 'react';

import { Select } from '@eventespresso/ui-components';
import { useDatesListFilterState } from '@eventespresso/edtr-services';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, salesOptions } from './options';

const options = objectToSelectOptions(salesOptions);

const SalesControl: React.FC = () => {
	const { sales, setSales } = useDatesListFilterState();

	return (
		<Select
			id='dates-list-sales-control'
			label={labels.sales}
			onChangeValue={setSales}
			options={options}
			value={sales}
		/>
	);
};

export default SalesControl;
