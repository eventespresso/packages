import React from 'react';
import { __ } from '@wordpress/i18n';

import { CalendarOutlined } from '@eventespresso/icons';
import { ButtonRow, CollapsibleLegend } from '@eventespresso/components';
import { FormSectionSidebar } from '@eventespresso/form';
// import { Pagination } from '@eventespresso/adapters';

import GeneratedDatetimes from './GeneratedDatetimes';
import { legendConfig } from './config';
import RDate from './RDate';
import useGenerateDates from './useGenerateDates';
import Warning from './Warning';

import './styles.scss';
import './bg-colors.scss';

const GeneratedDates: React.FC = () => {
	const datetimes = useGenerateDates(true);

	return (
		<>
			<div className='rrule-generator-wrapper'>
				<FormSectionSidebar Icon={CalendarOutlined} title={__('Dates List')} />
				<div className='rrule-generator__main-content'>
					<GeneratedDatetimes datetimes={datetimes} />
					{/* <Pagination defaultPerPage={6} /> */}
					<RDate />
					<Warning count={datetimes?.length} />
				</div>
			</div>
			<ButtonRow>
				<CollapsibleLegend direction='row' legendConfig={legendConfig} />
			</ButtonRow>
		</>
	);
};

export default GeneratedDates;
