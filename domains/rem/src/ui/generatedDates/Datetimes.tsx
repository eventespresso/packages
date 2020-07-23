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
			<div className={'px-0 pt-3 border rounded'}>
				<div className='px-3'>
					<div className='col-sm-8 offset-sm-2'>
						<div className='form-group'>
							<ul className='generated-datetimes-list'>
								<DatetimeRows datetimes={datetimes} datetimesPage={datetimesPage} onClick={onClick} />
							</ul>
							<div className='rem-gdp-div'>
								<Pagination
									defaultPerPage={6}
									onChangePageNumber={setPageNumber}
									onChangePerPage={setPerPage}
									pageNumber={pageNumber}
									perPage={perPage}
									showPerPageChanger={showPerPageChanger}
									total={total}
								/>
							</div>
							<Warning count={datetimes?.length} freq={freq} />
						</div>
					</div>
				</div>
			</div>
			<input type={'hidden'} id={'rem-generated-datetimes-json'} />
		</>
	);
};

export default Datetimes;
