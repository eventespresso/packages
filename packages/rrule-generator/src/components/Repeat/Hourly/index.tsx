import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { BaseProps, OnChangeInput } from '../../types';
import { useRRuleState } from '../../../hooks';

const Hourly: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { hourly },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useCallback<OnChangeInput>(
		(event) => {
			setRepeatInterval('hourly', +event.target.value);
		},
		[setRepeatInterval]
	);
	return (
		<div className='form-group row d-flex align-items-sm-center'>
			<div className='col-sm-1 offset-sm-2'>{__('every')}</div>
			<div className='col-sm-2'>
				<input
					id={`${id}-interval`}
					name='repeat.hourly.interval'
					aria-label='Repeat hourly interval'
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
