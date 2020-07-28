import React from 'react';

import { Pagination } from '@eventespresso/adapters';

import DatetimeRows from './DatetimeRows';
import Warning from './Warning';
import { DatetimesProps } from './types';
import RDate from './RDate';

const Datetimes: React.FC<DatetimesProps> = ({
	datetimes,
	datetimesPage,
	freq,
	pageNumber,
	perPage = 10,
	setPerPage,
	setPageNumber,
	showPerPageChanger = true,
	total,
}) => {
	return (
		<>
			<DatetimeRows datetimes={datetimes} datetimesPage={datetimesPage} />
			<Pagination
				defaultPerPage={6}
				onChangePageNumber={setPageNumber}
				onChangePerPage={setPerPage}
				pageNumber={pageNumber}
				perPage={perPage}
				showPerPageChanger={showPerPageChanger}
				total={total}
			/>
			<RDate />
			<Warning count={datetimes?.length} freq={freq} />
		</>
	);
};

export default Datetimes;
