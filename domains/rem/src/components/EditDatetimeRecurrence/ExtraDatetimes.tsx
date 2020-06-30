import React from 'react';
// import { isArray } from 'lodash';
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
// import { SettingsPanel } from '@eventespresso/components';

import ExtraDatetime from './ExtraDatetime';
import { PATTERN_TYPE_RECURRENCE } from '../../constants';

const getDatetimesList = (datetimes, addDatetime, deleteDatetime, handleChange) => {
	const dates = datetimes.map(function (extraDate, index) {
		return (
			<li key={index}>
				<ExtraDatetime
					extraDate
					handleChange={handleChange}
					addDateHandler={addDatetime}
					deleteDateHandler={deleteDatetime}
					options={{
						dateFormat: 'YYYY-MM-DD',
						locale: 'en_US',
					}}
					index={index}
					datetimeCount={datetimes.length}
				/>
			</li>
		);
	}, this);
	return <ul>{dates}</ul>;
};

const ExtraDatetimes = ({ id, type, datetimes, addDatetime, deleteDatetime, handleChange }) => {
	if (!Array.isArray(datetimes)) {
		return null;
	}
	const label =
		type === PATTERN_TYPE_RECURRENCE
			? __('Extra Dates to Add', 'event_espresso')
			: __('Exceptions to Remove', 'event_espresso');
	id =
		type === PATTERN_TYPE_RECURRENCE
			? 'add-dates-rrule-generator-wrapper-' + id
			: 'remove-dates-rrule-generator-wrapper-' + id;
	const className =
		type === PATTERN_TYPE_RECURRENCE
			? 'add-dates-rrule-generator-wrapper rrule-generator-wrapper'
			: 'remove-dates-rrule-generator-wrapper rrule-generator-wrapper';
	return (
		<PanelBody title={label} id={id} className={className} initialOpen={datetimes.length > 0}>
			<PanelRow className={'extra-dates-form rem-form-row'}>
				<div className={'px-0 pt-3 border rounded'}>
					<div className='px-3'>
						<div className='col-sm-6 offset-sm-2'>
							{getDatetimesList(datetimes, addDatetime, deleteDatetime, handleChange)}
						</div>
					</div>
				</div>
			</PanelRow>
		</PanelBody>
	);
};

export default ExtraDatetimes;
