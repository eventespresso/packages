import React from 'react';
import { __ } from '@wordpress/i18n';

export const DateRangePickerLegend: React.FC = () => {
	return (
		<div className='date-range-picker-legend__wrapper'>
			<ul>
				<li className='date-range-picker-legend__item'>
					<span className='legend-item__range-start'></span>
					{__('start date')}
				</li>
				<li className='date-range-picker-legend__item'>
					<span className='legend-item__range-day'></span>
					{__('day in range')}
				</li>
				<li className='date-range-picker-legend__item'>
					<span className='legend-item__range-end'></span>
					{__('end date')}
				</li>
			</ul>
		</div>
	);
};
