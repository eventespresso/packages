import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import { BaseProps, OnChangeInput } from '../../types';
import { useRRuleState } from '../../../hooks';

const Daily: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { daily },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useCallback<OnChangeInput>(
		(event) => {
			setRepeatInterval('daily', +event.target.value);
		},
		[setRepeatInterval]
	);
	return (
		<div className='form-group row d-flex align-items-sm-center'>
			<div className='col-sm-1 offset-sm-2'>{__('every')}</div>
			<div className='col-sm-2'>
				<input
					id={`${id}-interval`}
					name='repeat.daily.interval'
					aria-label={__('Repeat daily interval')}
					className='form-control'
					value={daily?.interval}
					onChange={onChangeInterval}
				/>
			</div>
			<div className='col-sm-1'>{__('day(s)')}</div>
		</div>
	);
};

export default Daily;
