import React, { Suspense } from 'react';

import { LoadingNotice } from '@eventespresso/components';

const TableView = React.lazy(() => import(/* webpackChunkName: "tickets-table-view" */ './TableView'));

const RenderTableView = () => {
	return (
		<Suspense fallback={<LoadingNotice />}>
			<TableView />
		</Suspense>
	);
};

export default RenderTableView;
