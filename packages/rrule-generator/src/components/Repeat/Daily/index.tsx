import React from 'react';
import { __ } from '@wordpress/i18n';
import { BaseProps } from '../../types';
import { useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';

const Daily: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { daily },
		setRepeatInterval,
	} = useRRuleState();

	const onChangeInterval = useIntervalUpdater('daily', setRepeatInterval);

	return (
		<div className='form-group row d-flex align-items-sm-center'>
			<div className=' '>{__('every')}</div>
			<div className=''>
				<input
					id={`${id}-interval`}
					name='repeat.daily.interval'
					aria-label={__('Repeat daily interval')}
					className='rrule-generator__form-control'
					value={daily?.interval}
					onChange={onChangeInterval}
				/>
			</div>
			<div className=''>{__('day(s)')}</div>
		</div>
	);
};

export default Daily;
