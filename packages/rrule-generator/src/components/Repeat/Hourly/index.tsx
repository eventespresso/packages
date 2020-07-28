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
		<div className='form-group row d-flex align-items-sm-center'>
			<div className='col-sm-1 offset-sm-2'>{__('every')}</div>
			<div className='col-sm-2'>
				<input
					id={`${id}-interval`}
					name='repeat.hourly.interval'
					aria-label={__('Repeat hourly interval')}
					className='form-control'
					value={hourly?.interval}
					onChange={onChangeInterval}
				/>
			</div>
			<div className='col-sm-1'>{__('hour(s)')}</div>
		</div>
	);
};

export default Hourly;
