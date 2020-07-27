import React from 'react';
import { __ } from '@wordpress/i18n';
import { BaseProps } from '../../types';
import { useRRuleState } from '../../../hooks';
import { getIntervalUpdater } from '../../../utils';

const Daily: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { daily },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = getIntervalUpdater('daily', setRepeatInterval);
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
