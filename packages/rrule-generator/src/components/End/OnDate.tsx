import React from 'react';
import { __ } from '@eventespresso/i18n';

import OnDate, { OnDateProps } from '../OnDate';
import { useRRuleConfig } from '../../hooks';

const EndOnDate: React.FC<OnDateProps> = ({ id, date, onChange }) => {
	const { maxEndDate } = useRRuleConfig();
	return (
		<OnDate
			id={id}
			maxDate={maxEndDate}
			label={__('Datetime picker for end on date')}
			date={date}
			onChange={onChange}
		/>
	);
};

export default EndOnDate;
