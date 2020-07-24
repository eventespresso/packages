import React from 'react';
import { __ } from '@wordpress/i18n';

import OnDate, { OnDateProps } from '../OnDate';

const EndOnDate: React.FC<OnDateProps> = ({ id, date, onChange }) => (
	<div className='col-6 col-sm-3'>
		<OnDate id={id} label={__('Datetime picker for end on date')} date={date} onChange={onChange} />
	</div>
);

export default EndOnDate;
