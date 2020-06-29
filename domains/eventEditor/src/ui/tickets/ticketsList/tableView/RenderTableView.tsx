import React, { Suspense } from 'react';

import { LoadingNotice } from '@eventespresso/components';

const TableView = React.lazy(() => import(/* webpackChunkName: "tickets-table-view" */ './TableView'));

const RenderTableView: React.FC = () => {
	return (
		<Suspense fallback={<LoadingNotice />}>
			<TableView />
		</Suspense>
	);
};

export default RenderTableView;
