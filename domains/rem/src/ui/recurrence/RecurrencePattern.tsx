import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { RRuleEditor } from '../rRule';

import { useFormState } from '../../data';

import './style.scss';

const RecurrencePattern: React.FC = () => {
	const { rRule, setRRule } = useFormState();

	const onReset = useCallback(() => setRRule(''), [setRRule]);

	return (
		<RRuleEditor
			id={'r-rule'}
			onChange={setRRule}
			onReset={onReset}
			rRuleString={rRule}
			resetLabel={__('Reset Recurrence Pattern')}
			type='recurrence'
		/>
	);
};

export default RecurrencePattern;
