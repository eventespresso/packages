import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import OnDate from '../OnDate';

import { useRRuleState } from '../../hooks';
import { BaseProps } from '../types';

const Start: React.FC<BaseProps> = ({ id }) => {
	const { start, setStartDate } = useRRuleState();
	const onChangeStart = useCallback(
		(date) => {
			setStartDate(date);
		},
		[setStartDate]
	);
	return (
		<div className='px-3'>
			<div className='form-group row'>
				<div className='col-sm-2 text-sm-right'>
					<label htmlFor={id} className='col-form-label'>
						<strong>{__('Start')}</strong>
					</label>
				</div>
				<OnDate id={id} label={__('Start')} date={start.date} onChange={onChangeStart} />
			</div>
		</div>
	);
};

export default Start;
