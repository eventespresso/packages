import React from 'react';

import { RRuleEditor } from '../rRule';

import { useFormState } from '../../data';

import './style.scss';

const RecurrencePattern: React.FC = () => {
	const { rRule, setRRule } = useFormState();

	return <RRuleEditor id={'r-rule'} onChange={setRRule} rRuleString={rRule} type='recurrence' />;
};

export default RecurrencePattern;
