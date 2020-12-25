import { lazy, Suspense } from 'react';

import { LoadingNotice } from '@eventespresso/ui-components';

const TableView = lazy(() => import(/* webpackChunkName: "dates-table-view" */ './TableView'));

const RenderTableView: React.FC = () => {
	return (
		<Suspense fallback={<LoadingNotice />}>
			<TableView />
		</Suspense>
	);
};

export default RenderTableView;
