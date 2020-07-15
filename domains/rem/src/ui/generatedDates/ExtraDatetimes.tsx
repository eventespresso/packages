import React from 'react';
// import { isArray } from 'lodash';
// import { PanelBody, PanelRow } from '@wordpress/components';
// import { __ } from '@wordpress/i18n';
// import { SettingsPanel } from '@eventespresso/components';

import type { Datetime } from '@eventespresso/edtr-services';
import ExtraDatetime from './ExtraDatetime';
// import { PATTERN_TYPE_RECURRENCE } from '../../constants';

interface ExtraDatetimesProps {
	id: string;
	type: any;
	datetimes: Datetime[];
	addDatetime: VoidFunction;
	deleteDatetime: VoidFunction;
	handleChange: VoidFunction;
}

const ExtraDatetimes: React.FC<ExtraDatetimesProps> = ({
	id,
	type,
	datetimes,
	addDatetime,
	deleteDatetime,
	handleChange,
}) => {
	if (!Array.isArray(datetimes)) {
		return null;
	}

	// const label =
	// 	type === PATTERN_TYPE_RECURRENCE
	// 		? __('Extra Dates to Add', 'event_espresso')
	// 		: __('Exceptions to Remove', 'event_espresso');
	// const typeBasedId =
	// 	type === PATTERN_TYPE_RECURRENCE
	// 		? 'add-dates-rrule-generator-wrapper-' + id
	// 		: 'remove-dates-rrule-generator-wrapper-' + id;

	// const className =
	// 	type === PATTERN_TYPE_RECURRENCE
	// 		? 'add-dates-rrule-generator-wrapper rrule-generator-wrapper'
	// 		: 'remove-dates-rrule-generator-wrapper rrule-generator-wrapper';

	const dates = datetimes.map((extraDate, index) => (
		<li key={index}>
			<ExtraDatetime
				extraDate={extraDate}
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
	));

	return <ul>{dates}</ul>;
};

export default ExtraDatetimes;
