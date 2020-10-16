import React from 'react';

import { getRuleText } from '../../utils';

export interface RRuleTextProps {
	rRuleString?: string;
}

const RRuleText: React.FC<RRuleTextProps> = ({ rRuleString }) => {
	const ruleText = getRuleText(rRuleString);

	return (
		ruleText && (
			<div className='rrule-generator__form-group-row'>
				<div className='rrule-text'>{ruleText}</div>
			</div>
		)
	);
};

export default RRuleText;
