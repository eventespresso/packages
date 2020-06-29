import React from 'react';
import { __ } from '@wordpress/i18n';

import { TypeName } from '@eventespresso/services';
import { domain, datesList } from '@eventespresso/edtr-services';
import { EntityList } from '@eventespresso/components';

import { DatetimesListProvider, withEntityListContext } from '@edtrServices/context';
import { useDatesListFilterState } from '@edtrServices/filterState';
import AddNewDateButton from './AddNewDateButton';
import { legendConfig } from './config';
import { RenderCardView } from './cardView';
import { RenderTableView } from './tableView';

const DatesList: React.FC = () => {
	const filterState = useDatesListFilterState();

	return (
		<EntityList
			domain={domain}
			entityType={TypeName.datetimes}
			filterState={filterState}
			footer={<AddNewDateButton />}
			headerText={__('Event Dates')}
			legendConfig={legendConfig}
			listId={datesList}
			loadingText={__('loading event dates...')}
			renderList={() => (filterState.view === 'card' ? <RenderCardView /> : <RenderTableView />)}
		/>
	);
};

export default withEntityListContext({
	Provider: DatetimesListProvider,
	Component: DatesList,
});
