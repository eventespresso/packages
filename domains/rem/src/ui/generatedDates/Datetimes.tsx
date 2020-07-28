import React from 'react';

import { Pagination } from '@eventespresso/adapters';

import DatetimeRows from './DatetimeRows';
import Warning from './Warning';
import { DatetimesProps } from './types';

const Datetimes: React.FC<DatetimesProps> = ({
	datetimes,
	datetimesPage,
	freq,
	onClick,
	pageNumber,
	perPage = 10,
	setPerPage,
	setPageNumber,
	showPerPageChanger = true,
	total,
}) => {
	return (
		<>
			<DatetimeRows datetimes={datetimes} datetimesPage={datetimesPage} onClick={onClick} />
			<Pagination
				defaultPerPage={6}
				onChangePageNumber={setPageNumber}
				onChangePerPage={setPerPage}
				pageNumber={pageNumber}
				perPage={perPage}
				showPerPageChanger={showPerPageChanger}
				total={total}
			/>
			<Warning count={datetimes?.length} freq={freq} />
		</>
	);
};

export default Datetimes;
