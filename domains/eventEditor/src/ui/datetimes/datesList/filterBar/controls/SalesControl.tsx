import React from 'react';

import { SelectInput } from '@eventespresso/components';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { objectToSelectOptions } from '@eventespresso/utils';

import { labels, salesOptions } from './options';

const options = objectToSelectOptions(salesOptions);

const SalesControl: React.FC = () => {
	const { sales, setSales } = useDatesListFilterState();
	return <SelectInput label={labels.sales} value={sales} options={options} onChangeValue={setSales} />;
};

export default SalesControl;
