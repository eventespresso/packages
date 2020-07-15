import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { RRuleEditor } from '../rRule';

import { useDatetime } from '../../context';
import { useFormState } from '../../services/data';

import './style.scss';

const RecurrencePattern: React.FC = () => {
	const datetime = useDatetime();
	const { rRule, setRRule } = useFormState();

	const onReset = useCallback(() => setRRule(''), [setRRule]);

	return (
		<RRuleEditor
			id={datetime.id}
			onChange={setRRule}
			onReset={onReset}
			rRuleString={rRule}
			resetLabel={__('Reset Recurrence Pattern')}
			type='recurrence'
		/>
	);
};

export default RecurrencePattern;
