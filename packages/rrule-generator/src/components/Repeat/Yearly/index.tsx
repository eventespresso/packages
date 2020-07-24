import React, { useCallback } from 'react';

import On from './On';
import OnThe from './OnThe';
import { useRRuleState, useRRuleConfig } from '../../../hooks';
import { RepeatMode } from '../../../types';
import { OnChangeInput, BaseProps } from '../../types';

const Yearly: React.FC<BaseProps> = ({ id }) => {
	const { setRepeatMode } = useRRuleState();
	const { yearlyModes } = useRRuleConfig();
	const isTheOnlyMode = yearlyModes?.length === 1;

	const onChangeMode = useCallback<OnChangeInput>(
		(event) => {
			setRepeatMode('yearly', event.target.value as RepeatMode);
		},
		[setRepeatMode]
	);
	return (
		<div>
			{yearlyModes?.includes('ON') && (
				<On id={`${id}-on`} isTheOnlyMode={isTheOnlyMode} onChangeMode={onChangeMode} />
			)}
			{yearlyModes?.includes('ON_THE') && (
				<OnThe id={`${id}-onThe`} isTheOnlyMode={isTheOnlyMode} onChangeMode={onChangeMode} />
			)}
		</div>
	);
};

export default Yearly;
