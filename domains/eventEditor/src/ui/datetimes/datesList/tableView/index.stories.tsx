import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { EntityTable } from '@eventespresso/ee-components';
import {
	datesList,
	domain,
	useDatesListFilterState,
	useFilteredDateIds,
	useReorderDatetimes,
	DatetimesListProvider,
	withEntityListContext,
} from '@eventespresso/edtr-services';
import { withDataProvider } from '@eventespresso/data';

import useHeaderRowGenerator from './useHeaderRowGenerator';
import useBodyRowGenerator from './useBodyRowGenerator';

export default {
	argTypes: {},
	component: EntityTable,
	title: 'Components/datetimes/EntityTable',
} as Meta;

export const Default = () => {
	const bodyRowGenerator = useBodyRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	return withDataProvider(() => (
		<EntityTable
			bodyRowGenerator={bodyRowGenerator}
			domain={domain}
			// entityIds={filteredDateIds}
			// filterState={filterState}
			headerRowGenerator={headerRowGenerator}
			listId={datesList}
			tableCaption={'Event Dates'}
			tableId='date-entities-table-view'
		/>
	));

	// return withEntityListContext({
	// 	Provider: DatetimesListProvider,
	// 	Component: () => (
	// 		<EntityTable
	// 			bodyRowGenerator={bodyRowGenerator}
	// 			domain={domain}
	// 			// entityIds={filteredDateIds}
	// 			// filterState={filterState}
	// 			headerRowGenerator={headerRowGenerator}
	// 			listId={datesList}
	// 			tableCaption={'Event Dates'}
	// 			tableId='date-entities-table-view'
	// 		/>
	// 	),
	// });
};
