import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import On from './On';
import OnThe from './OnThe';
import { BaseProps, OnChangeInput } from '../../types';
import { useRRuleConfig, useRRuleState } from '../../../hooks';
import { RepeatMode } from '../../../types';
import { useIntervalUpdater } from '../../../utils';

const Monthly: React.FC<BaseProps> = ({ id }) => {
	const {
		repeat: { monthly },
		setRepeatMode,
		setRepeatInterval,
	} = useRRuleState();
	const { monthlyModes } = useRRuleConfig();
	const isTheOnlyMode = monthlyModes?.length === 1;

	const onChangeInterval = useIntervalUpdater('monthly', setRepeatInterval);

	const onChangeMode = useCallback<OnChangeInput>(
		(event) => {
			setRepeatMode('monthly', event.target.value as RepeatMode);
		},
		[setRepeatMode]
	);

	return (
		<div>
			<div className='form-group row d-flex align-items-sm-center'>
				<div className=' '>{__('every')}</div>
				<div className='col-sm-3'>
					<input
						id={`${id}-interval`}
						name='repeat.monthly.interval'
						aria-label={__('Repeat monthly interval')}
						className='rrule-generator__form-control'
						value={monthly?.interval}
						onChange={onChangeInterval}
					/>
				</div>
				<div className=''>{__('month(s)')}</div>
			</div>

			{monthlyModes?.includes('ON') && (
				<On id={`${id}-on`} isTheOnlyMode={isTheOnlyMode} onChangeMode={onChangeMode} />
			)}
			{monthlyModes?.includes('ON_THE') && (
				<OnThe id={`${id}-onThe`} isTheOnlyMode={isTheOnlyMode} onChangeMode={onChangeMode} />
			)}
		</div>
	);
};

export default Monthly;
