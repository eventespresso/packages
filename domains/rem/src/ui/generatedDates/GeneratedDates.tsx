import React from 'react';
import { __ } from '@eventespresso/i18n';

import { CalendarOutlined } from '@eventespresso/icons';
import { ButtonRow, CollapsibleLegend } from '@eventespresso/components';
import { FormSectionSidebar } from '@eventespresso/form';

import GeneratedDatetimes from './GeneratedDatetimes';
import { useGenerateDates } from '../../data';
import { legendConfig } from './config';
import { Pagination, usePaginatedDates, usePagination } from './Pagination';
import RDate from './RDate';
import Warning from './Warning';

import './styles.scss';
import './bg-colors.scss';

const GeneratedDates: React.FC = () => {
	const dates = useGenerateDates(true);
	const paginationState = usePagination(dates?.length);
	const paginatedDates = usePaginatedDates({ dates, paginationState });

	return (
		<>
			<div className='rrule-generator-wrapper'>
				<FormSectionSidebar Icon={CalendarOutlined} title={__('Dates List')} />
				<div className='rrule-generator__main-content'>
					<GeneratedDatetimes datetimes={paginatedDates} />
					<Pagination {...paginationState} />
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
