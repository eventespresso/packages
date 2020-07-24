import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { AfterProps } from './types';

const After: React.FC<AfterProps> = ({ id, after, onChange }) => {
	const onChangeAfter = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			// Convert input from a string to a number
			let numericValue = +event.target.value;
			// Check if is a number and is less than 1000
			if (isNaN(numericValue) || numericValue >= 1000) {
				numericValue = 0;
			}
			onChange(numericValue);
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
						className='form-control'
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
