import React from 'react';

import { SelectInput } from '@eventespresso/components';
import { useTicketsListFilterState } from '@edtrServices/filterState';
import { useMemoStringify } from '@eventespresso/hooks';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, salesOptions, salesIsChainedOptions } from './options';

const SalesControl: React.FC = () => {
	const { isChained, sales, setSales } = useTicketsListFilterState();
	const options = useMemoStringify(objectToSelectOptions(isChained ? salesIsChainedOptions : salesOptions), [
		isChained,
	]);

	return (
		<SelectInput
			id='tickets-list-sales-control'
			label={labels.sales}
			onChangeValue={setSales}
			options={options}
			value={sales}
		/>
	);
};

export default SalesControl;
