import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { AfterProps } from './types';
import { getNumericValue } from '../../utils';

const After: React.FC<AfterProps> = ({ id, after, onChange }) => {
	const onChangeAfter = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange(getNumericValue(event.target.value));
		},
		[onChange]
	);
	return (
		<div className='col-sm-4'>
			<div className='form-group m-0 row d-flex align-items-center'>
				<div className='col-3 col-sm-6 pl-0'>
					<input
						id={id}
						name='end.after'
						aria-label={__('End after')}
						className='rrule-generator__form-control'
						value={after}
						onChange={onChangeAfter}
					/>
				</div>
				<div className='col-9 col-sm-6'>{__('executions')}</div>
			</div>
		</div>
	);
};

export default After;
