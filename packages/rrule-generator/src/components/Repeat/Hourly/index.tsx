import React from 'react';
import { __ } from '@wordpress/i18n';

import { BaseProps } from '../../types';
import { useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';

const Hourly: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { hourly },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useIntervalUpdater('hourly', setRepeatInterval);

	return (
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start rrule-generator__form-group-row--no-label'>
			<label className='rrule-generator__labelled-input'>
				<span>{__('every')}</span>
				<input
					aria-label={__('Repeat hourly interval')}
					className='rrule-generator__form-control rrule-generator__input'
					id={`${id}-interval`}
					name='repeat.hourly.interval'
					onChange={onChangeInterval}
					type='number'
					value={hourly?.interval}
				/>
				<span>{__('hour(s)')}</span>
			</label>
		</div>
	);
};

export default Hourly;
