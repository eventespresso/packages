import React from 'react';

import { RRuleEditor } from '../rRule';

import { useFormState } from '../../data';

import './style.scss';

const ExclusionPattern: React.FC = () => {
	const { exRule, setExRule } = useFormState();

	return <RRuleEditor id={'ex-rule'} onChange={setExRule} rRuleString={exRule} type='exclusion' />;
};

export default ExclusionPattern;
