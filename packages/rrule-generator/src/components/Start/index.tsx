import React from 'react';
import { __ } from '@wordpress/i18n';

import OnDate from './OnDate';

import { StartProps } from './types';

const Start: React.FC<StartProps> = ({ id, value, onChange, locale, calendarComponent }) => (
	<div className='px-3'>
		<div className='form-group row'>
			<div className='col-sm-2 text-sm-right'>
				<label htmlFor={id} className='col-form-label'>
					<strong>{__('Start')}</strong>
				</label>
			</div>
			<OnDate id={id} locale={locale} value={value} onChange={onChange} calendarComponent={calendarComponent} />
		</div>
	</div>
);

export default Start;
