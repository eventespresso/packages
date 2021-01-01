import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Divider, NumberInput } from '@eventespresso/ui-components';

import On from './On';
import OnThe from './OnThe';
import { useRRuleConfig, useRRuleState } from '../../../hooks';
import { useIntervalUpdater } from '../../../utils';
import type { BaseProps, OnChangeInput } from '../../types';
import type { RepeatMode } from '../../../types';

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
		<div className='rrule-generator__form-group-row rrule-generator__form-group-row--align-items-start rrule-generator__form-group-row--no-label rrule-generator__repeat-monthly'>
			<label className='rrule-generator__labelled-input'>
				<span>{__('every')}</span>
				<Divider orientation='vertical' size='tiny' />
				<NumberInput
					aria-label={__('Repeat monthly interval')}
					id={`${id}-interval`}
					name={`${id}-interval`}
					onChange={onChangeInterval}
					value={monthly?.interval}
				/>
				<span>{__('month(s)')}</span>
			</label>

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
