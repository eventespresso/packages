import React, { useCallback } from 'react';

import { ActiveFilters, FilterTag } from '@eventespresso/components';

import { DatetimeSales, DatetimeStatus, useDatesListFilterState } from '@edtrServices/filterState';
import { labels, statusOptions, salesOptions } from './controls/options';

const ActiveDatesFilters: React.FC = () => {
	const { status, setStatus, sales, setSales, searchText, setSearchText } = useDatesListFilterState();

	const statusTitle = `${labels.status}: ${statusOptions?.[status]}`;
	const salesTitle = `${labels.sales}: ${salesOptions?.[sales]}`;
	const searchTitle = `${labels.search}: ${searchText}`;

	const onRemoveStatus = useCallback(() => setStatus(DatetimeStatus.all), [setStatus]);
	const onRemoveSales = useCallback(() => setSales(DatetimeSales.all), [setSales]);
	const onRemoveSearch = useCallback(() => setSearchText(''), [setSearchText]);

	return (
		<ActiveFilters>
			{status !== DatetimeStatus.all && <FilterTag title={statusTitle} onRemove={onRemoveStatus} />}
			{sales !== DatetimeSales.all && <FilterTag title={salesTitle} onRemove={onRemoveSales} />}
			{searchText ? <FilterTag title={searchTitle} onRemove={onRemoveSearch} /> : null}
		</ActiveFilters>
	);
};

export default ActiveDatesFilters;
