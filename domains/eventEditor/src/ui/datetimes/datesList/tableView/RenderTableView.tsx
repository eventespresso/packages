import React, { Suspense } from 'react';

import { LoadingNotice } from '@eventespresso/components';

const TableView = React.lazy(() => import(/* webpackChunkName: "dates-table-view" */ './TableView'));

const RenderTableView = () => {
	return (
		<Suspense fallback={<LoadingNotice />}>
			<TableView />
		</Suspense>
	);
};

export default RenderTableView;
