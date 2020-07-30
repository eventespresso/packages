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
		<label className='rrule-generator__labelled-input'>
			<input
				id={id}
				name='end.after'
				aria-label={__('End after')}
				className='rrule-generator__form-control rrule-generator__input'
				value={after}
				onChange={onChangeAfter}
			/>

			<span>{__('executions')}</span>
		</label>
	);
};

export default After;
