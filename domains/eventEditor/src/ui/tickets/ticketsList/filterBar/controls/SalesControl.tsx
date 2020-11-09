import React from 'react';

import { Select } from '@eventespresso/components';
import { useTicketsListFilterState } from '@eventespresso/edtr-services';
import { useMemoStringify } from '@eventespresso/hooks';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, salesOptions, salesIsChainedOptions } from './options';

const SalesControl: React.FC = () => {
	const { isChained, sales, setSales } = useTicketsListFilterState();
	const options = useMemoStringify(objectToSelectOptions(isChained ? salesIsChainedOptions : salesOptions), [
		isChained,
	]);

	return (
		<Select
			id='tickets-list-sales-control'
			label={labels.sales}
			onChangeValue={setSales}
			options={options}
			value={sales}
		/>
	);
};

export default SalesControl;
