import { __ } from '@eventespresso/i18n';

import { EntityTable } from '@eventespresso/ee-components';
import { datesList, domain, useDatesListFilterState, useFilteredDateIds } from '@eventespresso/edtr-services';
import { withBulkEdit } from '@eventespresso/services';

import useBodyRowGenerator from './useBodyRowGenerator';
import useHeaderRowGenerator from './useHeaderRowGenerator';
import { Actions as BulkEditActions } from '../bulkEdit';

import './styles.scss';

/**
 * Displays event date details in a standard list table like view
 */
const TableView: React.FC = () => {
	const filterState = useDatesListFilterState();
	const filteredDateIds = useFilteredDateIds();

	const bodyRowGenerator = useBodyRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	return (
		<>
			<BulkEditActions />
			<EntityTable
				bodyRowGenerator={bodyRowGenerator}
				domain={domain}
				entityIds={filteredDateIds}
				filterState={filterState}
				headerRowGenerator={headerRowGenerator}
				listId={datesList}
				tableCaption={__('Event Dates')}
				tableId='date-entities-table-view'
			/>
		</>
	);
};

export default withBulkEdit(TableView);
