import React, { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { CalendarOutlined } from '@eventespresso/icons';
import { Pagination } from '@eventespresso/components';
import { ButtonRow, CollapsibleLegend } from '@eventespresso/components';
import { usePagination } from '@eventespresso/hooks';
import { paginateEntities } from '@eventespresso/utils';
import { FormSectionSidebar } from '@eventespresso/form';

import GeneratedDatetimes from './GeneratedDatetimes';
import { useGenerateDates } from '../../data';
import { legendConfig } from './config';
import RDate from './RDate';
import Warning from './Warning';

import './styles.scss';
import './bg-colors.scss';

const GeneratedDates: React.FC = () => {
	const dates = useGenerateDates(true);
	const { pageNumber, perPage, total, setPerPage, setPageNumber } = usePagination(dates?.length);
	const paginatedDates = useMemo(() => paginateEntities({ entities: dates, pageNumber, perPage }), [
		dates,
		pageNumber,
		perPage,
	]);

	return (
		<>
			<div className='rrule-generator-wrapper'>
				<FormSectionSidebar Icon={CalendarOutlined} title={__('Dates List')} />
				<div className='rrule-generator__main-content'>
					<GeneratedDatetimes datetimes={paginatedDates} />
					<Pagination
						defaultPerPage={6}
						onChangePageNumber={setPageNumber}
						onChangePerPage={setPerPage}
						pageNumber={pageNumber}
						perPage={perPage}
						showPerPageChanger={true}
						total={total}
					/>
					<RDate />
					<Warning datetimes={dates} />
				</div>
			</div>
			<ButtonRow align='left'>
				<CollapsibleLegend columnsPerRow={1} direction='row' legendConfig={legendConfig} />
			</ButtonRow>
		</>
	);
};

export default GeneratedDates;
