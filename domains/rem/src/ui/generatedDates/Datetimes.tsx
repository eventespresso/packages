import React from 'react';

// import { Pagination } from '@eventespresso/adapters';

import DatetimeRows from './DatetimeRows';
import Warning from './Warning';
import { DatetimesProps } from './types';
import RDate from './RDate';

const Datetimes: React.FC<DatetimesProps> = ({ datetimes }) => {
	return (
		<>
			<DatetimeRows datetimes={datetimes} />
			{/* <Pagination defaultPerPage={6} /> */}
			<RDate />
			<Warning count={datetimes?.length} />
		</>
	);
};

export default Datetimes;
